function getRandomInt(count: number) {
  return Math.floor(Math.random() * count)
}

function ProductDetailsLayout({ children }:{children: React.ReactNode}) {
  const random = getRandomInt(2);
  if( random === 1 ){
    throw new Error("Error loading productX")
  }
  return (
    <div style={{backgroundColor: "red", padding: "4rem"}}>
    <h2 style={{ backgroundColor: "#fff" }}>Featured Products</h2>
      {children}
    </div>
  )
}

export default ProductDetailsLayout