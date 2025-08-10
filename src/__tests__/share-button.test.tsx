/**
 * @vitest-environment jsdom
 */
import React, { act } from "react";
import { describe, it, expect, vi } from "vitest";
import { createRoot } from "react-dom/client";

const mockToast = vi.fn();
vi.mock("@/hooks/use-toast", () => ({
  useToast: () => ({ toast: mockToast }),
}));

import { ShareButton } from "@/components/ShareButton";

describe("ShareButton", () => {
  it("muestra un toast al copiar la URL", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      configurable: true,
    });
    Object.defineProperty(navigator, "share", {
      value: undefined,
      configurable: true,
    });

    const container = document.createElement("div");
    document.body.appendChild(container);
    const root = createRoot(container);

    await act(async () => {
      root.render(<ShareButton bookTitle="Test" />);
    });

    const button = container.querySelector("button")!;
    await act(async () => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(writeText).toHaveBeenCalledWith(window.location.href);
    expect(mockToast).toHaveBeenCalledWith({
      description: "¡Texto copiado al portapapeles!",
    });

    root.unmount();
    container.remove();
  });
});
