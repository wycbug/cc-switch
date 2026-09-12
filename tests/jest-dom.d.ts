import "vitest";
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

// jest-dom 尚未适配 vitest 5 的双泛型 Assertion<R, T>，这里手动补充匹配器类型
declare module "vitest" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unused-vars
  interface Assertion<R, T> extends TestingLibraryMatchers<T, R> {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface AsymmetricMatchersContaining
    extends TestingLibraryMatchers<any, any> {}
}
