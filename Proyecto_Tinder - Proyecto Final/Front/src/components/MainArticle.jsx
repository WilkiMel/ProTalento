import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../assets/images/image-web-3-desktop.jpg'

export const MainArticle = () => {
  return (
    <section className='mb-12 md:mb-0'>
      <picture>
        <source media='(max-width: 640px)' srcSet={imageMobile} />
        <source media='(min-width: 641px)' srcSet={imageDesktop} />
        <img src={imageMobile} alt="image" />
      </picture>
      <div className='sm:flex'>
        <div className='flex-1 py-6'>
          <h2 className='text-[40px] leading-none font-bold sm:text-[58px]'>SkillTinder: La Plataforma que Conecta Talento con Empresas</h2>
        </div>
        <div className='flex-1  pt-9 px-4'>
          <p className='mb-10 text-[13px] sm:text-[15px] '>En un mundo donde la búsqueda de talento es esencial para el éxito de las empresas, surge una plataforma innovadora que cambia el paradigma tradicional de la búsqueda de empleo. Esta es una plataforma inspirada en el modelo de Tinder, se diferencia al conectar a profesionales con empresas basándose en sus habilidades y no en la búsqueda de relaciones sentimentales.</p>
          <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue '>Read more</button>
        </div>
      </div>
    </section>
  )
}