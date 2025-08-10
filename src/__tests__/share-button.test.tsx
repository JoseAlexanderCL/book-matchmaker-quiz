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

    const url = window.location.origin;
    const message =
      'Hice el Quiz de Libros y me salió "Test". Revisa qué libro te sale en quelibrodel.club';
    const whatsapp = `https://wa.me/?text=${encodeURIComponent(message)}`;
    const twitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}&quote=${encodeURIComponent(message)}`;

    expect(document.querySelector(`a[href="${whatsapp}"]`)).toBeTruthy();
    expect(document.querySelector(`a[href="${twitter}"]`)).toBeTruthy();
    expect(document.querySelector(`a[href="${facebook}"]`)).toBeTruthy();

    root.unmount();
    container.remove();
  });
});
