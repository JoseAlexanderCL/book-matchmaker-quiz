import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getCatalog, saveCatalog, resetCatalog, exportCatalog } from "@/hooks/use-catalog";
import type { Catalog } from "@/lib/quiz/scoring";
import { useToast } from "@/hooks/use-toast";

export default function Admin() {
  const [raw, setRaw] = useState(JSON.stringify(getCatalog(), null, 2));
  const { toast } = useToast();

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const txt = await f.text();
    setRaw(txt);
  };

  const onSave = () => {
    try {
      const parsed = JSON.parse(raw) as Catalog;
      saveCatalog(parsed);
      toast({ title: "Catálogo actualizado", description: "Los cambios se han guardado en este dispositivo." });
    } catch (e) {
      toast({ title: "JSON inválido", description: "Revisa la estructura del catálogo.", variant: "destructive" });
    }
  };

  const onReset = () => {
    resetCatalog();
    setRaw(JSON.stringify(getCatalog(), null, 2));
    toast({ title: "Catálogo restablecido", description: "Se han cargado los valores por defecto." });
  };

  return (
    <main className="min-h-screen bg-gradient-subtle">
      <Helmet>
        <title>Admin – Catálogo del club</title>
        <meta name="description" content="Edita el diccionario de resultados y libros sin tocar el código." />
        <link rel="canonical" href="/admin" />
      </Helmet>

      <section className="container py-10 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Editor de catálogo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex flex-wrap gap-3 items-center">
                <input type="file" accept="application/json" onChange={onFile} />
                <Button variant="secondary" onClick={() => exportCatalog(JSON.parse(raw))}>Exportar</Button>
                <Button onClick={onSave} variant="hero">Guardar cambios</Button>
                <Button variant="outline" onClick={onReset}>Restablecer por defecto</Button>
              </div>
              <p className="text-sm text-muted-foreground">Pega o carga un JSON con la estructura: {`{ [MBTI]: { EI: { libros: [...], texto }, SN: {...}, TF: {...}, JP: {...} } }`}</p>
              <textarea
                className="w-full min-h-[420px] rounded-md border bg-background p-4 font-mono text-sm"
                value={raw}
                onChange={(e) => setRaw(e.target.value)}
                spellCheck={false}
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
