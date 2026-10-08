
import { expect, it, vi } from 'vitest';
import { getDeviceId } from './device';

it('gives the same id every time', () => {
  const store: Record<string, string> = {};

  vi.stubGlobal('localStorage', {
    getItem: (k: string) => store[k] ?? null,
    setItem: (k: string, v: string) => {
      store[k] = v;
    },
  });

  expect(getDeviceId()).toBe(getDeviceId());
});
