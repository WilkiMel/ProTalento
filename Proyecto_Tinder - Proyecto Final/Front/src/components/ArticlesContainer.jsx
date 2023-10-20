import { useEffect, useState } from "react"

import { Article } from "./Article"

import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'


//
const apiKey = 'a72213c8e55c47188ee952f90113dd8b'
//   

export const ArticlesContainer = () => {

  const [articles, setArticles] = useState([])

  useEffect(()=>{
    fetch(`https://${apiKey}`)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  }, [])
  return (
    <section className="md:flex md:flex-wrap md:place-content-between md:gap-10 md:justify-center"> 

    {
      // articles.map(article => 
      //   <Article 
      //     key={article.publishedAt}
      //     img={article.urlToImage}
      //     number='01'
      //     title={article.title}
      //     text={article.description}
      //   />)
    }

      <Article
        img={img1}
        number='01'
        title='Registro y Creación de Perfil'
        text='Los usuarios crean cuentas con información personal, educación, habilidades y experiencia laboral.'
      />
      <Article
        img={img2}
        number='02'
        title='Desliza para Conectar'
        text='Similar al modelo de Tinder, los candidatos y empresas pueden "deslizar" a la derecha si están interesados o a la izquierda si no lo están en un perfil.'
      />
      <Article
        img={img3}
        number='03'
        title='Coincidencias Basadas en Habilidades'
        text='La plataforma utiliza algoritmos avanzados para identificar coincidencias entre las habilidades requeridas por las empresas y las habilidades declaradas por los candidatos.'
      />

    </section>
  )
}