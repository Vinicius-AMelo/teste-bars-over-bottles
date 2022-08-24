# Consumo da API

A API seria consumida através da biblioteca axios, reservando a resposta em um estado,
então executar o método Array.map no estado e para cada item dentro do array, retornar
o componente card, passando o objeto com as informações por props, como mostrado abaixo

```
function CardList() {

   const [productList, setProductList] = useState()

 useEffect(() => {
   axios
     .get('http://bob-teste-front-end.herokuapp.com/api/products.json')
     .then((res) => {
       setProductList(res)
     })
     .catch((err) => console.log(err))
 }, [])

  return (
    <main className="card">
      <div className="main_products">
        {productList.map((product) => (
          <NavLink to="/Products">
            <ProductCard product={product} />
          </NavLink>
        ))}
      </div>
    </main>
  )
}

```


