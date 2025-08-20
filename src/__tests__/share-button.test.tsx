/**
 * @vitest-environment jsdom
 */
import React, { act } from "react";
import { describe, it, expect, vi } from "vitest";
import { createRoot } from "react-dom/client";

describe("ShareButton", () => {
  it("genera enlaces de fallback cuando navigator.canShare no soporta archivos", async () => {
    vi.resetModules();
    const canShareFalse = () => false;
    Object.defineProperty(navigator, "canShare", {
      value: canShareFalse,
      configurable: true,
      writable: true,
    });
    if (typeof window !== "undefined") {
      Object.defineProperty(window.navigator, "canShare", {
        value: canShareFalse,
        configurable: true,
        writable: true,
      });
    }

    const { ShareButton } = await import("@/components/ShareButton");

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

    const message = 'Completé el Quiz y obtuve el libro "Test"! :D';
    const whatsapp = `https://wa.me/?text=${encodeURIComponent(message)}`;
    const instagram = `instagram://story-camera`;

    expect(document.querySelector(`a[href="${whatsapp}"]`)).toBeTruthy();
    expect(document.querySelector(`a[href="${instagram}"]`)).toBeTruthy();

    root.unmount();
    container.remove();
  });

  it("usa shareAsImage cuando navigator.canShare soporta archivos", async () => {
    vi.resetModules();
    const shareAsImageMock = vi.fn().mockResolvedValue(undefined);
    vi.doMock("@/lib/ShareAsImage", () => ({ shareAsImage: shareAsImageMock }));

    const canShareMock = vi.fn(() => true);
    Object.defineProperty(navigator, "canShare", {
      value: canShareMock,
      configurable: true,
      writable: true,
    });
    if (typeof window !== "undefined") {
      Object.defineProperty(window.navigator, "canShare", {
        value: canShareMock,
        configurable: true,
        writable: true,
      });
    }

    const { ShareButton } = await import("@/components/ShareButton");

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

    expect(shareAsImageMock).toHaveBeenCalledWith("Test");

    root.unmount();
    container.remove();
  });
});

describe("shareAsImage", () => {
  it("revoca el objeto URL tras descargar la imagen", () => {
    const blob = new Blob(["test"], { type: "image/png" });
    const file = new File([blob], "test.png", { type: "image/png" });

    const createObjectURLSpy = vi.fn(() => "blob:test");
    const revokeObjectURLSpy = vi.fn();
    (globalThis as any).URL.createObjectURL = createObjectURLSpy;
    (globalThis as any).URL.revokeObjectURL = revokeObjectURLSpy;

    const link = document.createElement("a");
    link.download = file.name;
    link.href = URL.createObjectURL(file);
    link.click();
    URL.revokeObjectURL(link.href);

    expect(createObjectURLSpy).toHaveBeenCalled();
    expect(revokeObjectURLSpy).toHaveBeenCalledWith("blob:test");

    delete (globalThis as any).URL.createObjectURL;
    delete (globalThis as any).URL.revokeObjectURL;
  });
});
