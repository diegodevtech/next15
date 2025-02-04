function ProductDetailsLayout({ children }:{children: React.ReactNode}) {
  return (
    <div style={{backgroundColor: "red", padding: "4rem"}}>
    <h2 style={{ backgroundColor: "#fff" }}>Featured Products</h2>
      {children}
    </div>
  )
}

export default ProductDetailsLayout