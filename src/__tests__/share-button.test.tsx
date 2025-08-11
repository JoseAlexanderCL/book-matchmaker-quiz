/**
 * @vitest-environment jsdom
 */
import React, { act } from "react";
import { describe, it, expect } from "vitest";
import { createRoot } from "react-dom/client";

import { ShareButton } from "@/components/ShareButton";

describe("ShareButton", () => {
  it("genera enlaces de fallback cuando navigator.share no está disponible", async () => {
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

    const url = window.location.href;
    const message =
      'Completé el Quiz y obtuve el libro "Test"! :D';
    const whatsapp = `https://wa.me/?text=${encodeURIComponent(message)}`;
    const instagram = `instagram://story-camera`;

    expect(document.querySelector(`a[href="${whatsapp}"]`)).toBeTruthy();
    expect(document.querySelector(`a[href="${instagram}"]`)).toBeTruthy();

    root.unmount();
    container.remove();
  });
});
