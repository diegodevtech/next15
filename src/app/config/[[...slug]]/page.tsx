import React from "react";

// this layout will be loaded in evey route from after /docs on...
// /a/b/c/d/1/eursperhsefuihsfi

async function Config({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  return (
    <>
      <h1>Config page</h1>
      {slug && (
        <>
          <h4>Tamanho do slug: {slug.length}</h4>
          {slug.length === 2 ? (
            <h2>
              Viewing config for feature {slug[0]} and concept {slug[1]}
            </h2>
          ) : (
            slug.length === 1 && <h2>Viewing config for feature {slug[0]}</h2>
          )}
        </>
      )}
    </>
  );
}

export default Config;
