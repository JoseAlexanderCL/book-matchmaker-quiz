import html2canvas from "html2canvas";

export async function shareAsImage(bookTitle: string): Promise<void> {
  let clone: HTMLElement | null = null;
  let styleTag: HTMLStyleElement | null = null;

  try {
    const element = document.getElementById("book-recommendation");
    if (!element) return;

    // Crear un nuevo elemento con dimensiones fijas para story format
    clone = document.createElement('div');
    clone.id = "book-recommendation-share";
    clone.style.position = "absolute";
    clone.style.left = "-9999px";
    clone.style.top = "0";
    
    // Obtener los datos del elemento original
    const originalImg = element.querySelector('img[alt*="Portada"]') as HTMLImageElement;
    const title = element.querySelector('h2')?.textContent || '';
    const author = element.querySelector('.author-container span')?.textContent || '';
    const synopsis = element.querySelector('.synopsis-container p')?.textContent || '';
    const datoCurioso = element.querySelector('.bg-gradient-to-r.from-stone-200 p')?.textContent || '';
    const perfilLector = element.querySelector('.bg-blue-50 p')?.textContent || '';
    const logoSrc = element.querySelector('img[alt="Club de Lectura Santiago"]')?.getAttribute('src') || '';
    
    // Crear la estructura HTML optimizada para formato vertical
    clone.innerHTML = `
      <div class="story-container">
        <header class="header">
          <img src="${logoSrc}" alt="Club de Lectura Santiago" class="logo" />
          <div class="ribbon">
            <span class="ribbon-star" aria-hidden="true">✦</span>
            <h1 class="ribbon-title">Tu libro del Club de Lectura es:</h1>
          </div>
        </header>

        <section class="cover">
          <div class="cover-frame">
            <img src="${originalImg?.src || ''}" alt="${title}" class="cover-img" crossorigin="anonymous" />
          </div>
        </section>

        <section class="title">
          <h2 class="book-title">${title}</h2>
        </section>

        <section class="author">
          <span class="book-author">${author}</span>
        </section>

        ${synopsis ? `
        <section class="card synopsis">
          <h3 class="card-title">Sinopsis</h3>
          <p class="card-text clamp-7">${synopsis}</p>
        </section>` : ''}

        ${perfilLector ? `
        <section class="card profile">
          <h3 class="card-title">Tu perfil lector</h3>
          <p class="card-text clamp-7">${perfilLector}</p>
        </section>` : ''}

        <footer class="watermark">Club de Lectura Santiago</footer>
      </div>
    `;

    styleTag = document.createElement("style");
    styleTag.textContent = `
      /* Tipos y tokens (usa Google Fonts si cargan; fallback seguro) */
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap');

      :root {
        --bg: #F7F1E8;
        --paper: #FFFBF2;
        --ink: #2E2723;
        --muted: #564B45;
        --gold: #C6A15B;
        --gold-2: #8E7748;
        --forest: #2C4A3F;
        --shadow-1: 0 10px 30px rgba(0,0,0,.12);
        --shadow-2: 0 18px 48px rgba(0,0,0,.18);
        --radius-card: 28px;
        --radius-pill: 999px;
      }

      #book-recommendation-share {
        width: 1080px;
        height: 1920px;
        background: radial-gradient(1200px 1200px at 20% 10%, rgba(198,161,91,.10), transparent 50%),
                    radial-gradient(900px 900px at 80% 90%, rgba(142,119,72,.08), transparent 55%),
                    linear-gradient(180deg, var(--paper), var(--bg));
        font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif;
        color: var(--ink);
        overflow: hidden;
        position: relative;
      }

      .story-container {
        width: 100%;
        height: 100%;
        padding: 72px 96px;
        display: grid;
        grid-template-rows: auto auto auto auto auto 1fr auto;
        row-gap: 36px;
        position: relative;
        isolation: isolate;
      }

      /* esquinas decorativas muy sutiles */
      #book-recommendation-share::before,
      #book-recommendation-share::after {
        content: "";
        position: absolute;
        width: 160px; height: 160px;
        opacity: .25;
        pointer-events: none;
        background: conic-gradient(from 0deg, transparent 0 70%, rgba(198,161,91,.4) 70% 100%);
        border-radius: 24px;
        filter: blur(0.2px);
      }
      #book-recommendation-share::before { top: 36px; left: 36px; }
      #book-recommendation-share::after  { bottom: 36px; right: 36px; transform: rotate(180deg); }

      /* Header */
      .header { display:flex; flex-direction:column; align-items:center; gap:28px; }
      .logo { width:132px; height:auto; opacity:.9; filter: sepia(8%) saturate(90%); }

      .ribbon {
        display:flex; align-items:center; gap:14px;
        padding:18px 28px;
        border-radius: var(--radius-pill);
        border:1px solid rgba(198,161,91,.45);
        background: linear-gradient(180deg, rgba(198,161,91,.18), rgba(198,161,91,.10));
        box-shadow: var(--shadow-1);
      }
      .ribbon-star { font-size:20px; color: var(--gold-2); line-height:1; }
      .ribbon-title {
        margin:0; line-height:1.25; text-align:center;
        font: 600 28px/1.25 "Playfair Display", Georgia, serif;
        letter-spacing:.2px; color:#5A493E;
      }

      /* Portada */
      .cover { display:flex; justify-content:center; }
      .cover-frame {
        padding:26px;
        border-radius: 22px;
        background: linear-gradient(135deg, #D9C39A 0%, #BFA170 100%);
        box-shadow: var(--shadow-2);
        position:relative;
      }
      .cover-frame::after{
        content:""; position:absolute; inset:10px;
        border-radius: 14px;
        border:1px solid rgba(255,255,255,.55);
        pointer-events:none;
      }
      .cover-img{
        width: 340px; height: 510px; object-fit: cover;
        border-radius: 18px; display:block;
        box-shadow: 0 12px 28px rgba(0,0,0,.25);
        background: #EEE;
      }

      /* Título y autor */
      .title { text-align:center; }
      .book-title{
        margin:0;
        font: 700 48px/1.2 "Playfair Display", Georgia, serif;
        color:#3E2F27; letter-spacing:.3px;
        text-wrap: balance;
      }
      .author { text-align:center; }
      .book-author{
        font: 500 30px/1.3 "Playfair Display", Georgia, serif;
        color:#6E5B4F; opacity:.95;
      }

      /* Cards */
      .card{
        border-radius: var(--radius-card);
        padding: 32px 34px;
        background: linear-gradient(180deg, rgba(255,255,255,.85), rgba(255,255,255,.70));
        border: 1px solid rgba(198,161,91,.35);
        box-shadow: var(--shadow-1);
        position:relative;
      }
      .card-title{
        margin:0 0 14px 0;
        font: 600 30px/1.2 "Playfair Display", Georgia, serif;
        color:#4A3A31; text-align:center;
      }
      .card-text{
        margin:0; font: 400 24px/1.55 Inter, system-ui, sans-serif;
        color:#4E4038;
        text-align:center;
      }

      /* variantes */
      .synopsis { background: linear-gradient(180deg, rgba(255,253,247,.9), rgba(255,251,242,.78)); }
      .synopsis::before, .synopsis::after{
        content:"""; position:absolute; font:700 84px/1 Georgia, serif;
        color:rgba(110,91,79,.18); pointer-events:none;
      }
      .synopsis::before{ top:12px; left:18px; }
      .synopsis::after { content:"""; bottom:8px; right:18px; }

      .profile{
        background: linear-gradient(180deg, rgba(62,47,39,.95), rgba(62,47,39,.88));
        border-color: rgba(198,161,91,.45);
      }
      .profile .card-title{ color:#F2ECE3; }
      .profile .card-text{ color:#F7F1E8; opacity:.96; }

      /* Clamps para evitar overflow */
      .clamp-7{
        display:-webkit-box; -webkit-line-clamp:7; -webkit-box-orient:vertical;
        overflow:hidden;
      }

      .watermark{
        text-align:center; margin-top:12px;
        font: 500 18px/1.2 Inter, system-ui, sans-serif;
        color: rgba(46,39,35,.6);
        letter-spacing:.4px;
      }
    `;

    document.head.appendChild(styleTag);
    document.body.appendChild(clone);

    // Esperar a que las imágenes se carguen
    const images = Array.from(clone.getElementsByTagName("img"));
    await Promise.all(
      images.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise<void>((resolve) => {
              img.onload = img.onerror = () => resolve();
            }),
      ),
    );

    // Generar el canvas con las dimensiones exactas
    const canvas = await html2canvas(clone, {
      width: 1080,
      height: 1920,
      backgroundColor: "#F7F1E8",
      scale: 1,
      useCORS: true,
      allowTaint: false,
      onclone: (doc) => {
        const imgs = doc.querySelectorAll("#book-recommendation-share img");
        imgs.forEach((img) => {
          const src = (img as HTMLImageElement).getAttribute("src");
          if (src && /^https?:\/\//.test(src) && !src.startsWith(window.location.origin)) {
            (img as HTMLImageElement).crossOrigin = "anonymous";
          }
        });
      },
    });

    const blob = await new Promise<Blob | null>((resolve) => 
      canvas.toBlob(resolve, 'image/png', 1.0)
    );
    if (!blob) return;

    const sanitizedTitle = bookTitle.replace(/[^a-z0-9]/gi, "-");
    const file = new File([blob], `mi-libro-recomendado-${sanitizedTitle}.png`, {
      type: "image/png",
    });

    const message = `Completé el Quiz y obtuve el libro "${bookTitle}"! :D`;

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "Book Matchmaker",
        text: message,
      });
    } else {
      // Fallback: descargar la imagen
      const link = document.createElement("a");
      link.download = file.name;
      link.href = URL.createObjectURL(file);
      link.click();
      URL.revokeObjectURL(link.href);
    }
  } catch (err) {
    console.error("Error generating image:", err);
    alert("Ocurrió un error al generar la imagen");
  } finally {
    if (clone) clone.remove();
    if (styleTag) styleTag.remove();
  }
}
