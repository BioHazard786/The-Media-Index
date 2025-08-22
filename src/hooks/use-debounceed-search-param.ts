import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useDebouncedSearchParam(
  value: string,
  delay: number,
  paramName: string
) {
  // 1. Get router tools directly inside the hook
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 2. State for the debounced value (same as before)
  const [debouncedValue, setDebouncedValue] = useState(value);

  // 3. This useEffect still debounces the input value
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  // 4. NEW: This useEffect handles the URL update side-effect
  // It runs ONLY when the debouncedValue changes.
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (debouncedValue) {
      params.set(paramName, debouncedValue);
    } else {
      params.delete(paramName);
    }
    // Use replace to avoid polluting the browser history
    window.history.replaceState({}, '', `${pathname}?${params.toString()}`);
  }, [debouncedValue, paramName, pathname, searchParams]);

  // 5. Return the debounced value for the component to use
  return debouncedValue;
}
