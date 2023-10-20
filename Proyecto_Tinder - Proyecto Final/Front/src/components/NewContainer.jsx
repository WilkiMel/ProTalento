import { NewArticle } from "./NewArticle"

export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px] flex-none mb-[60px] md:w-[350px] md:mb-0 ">
      <h1 className="text-SoftOrange text-4xl font-bold">New</h1>

        <NewArticle 
          title='¿Qué es SkillTinder?'
          text='SkillSwipe es una plataforma digital que revoluciona el proceso de búsqueda de empleo al enfocarse en las habilidades y competencias de los candidatos. Al registrarse en SkillSwipe, los usuarios crean perfiles detallados donde destacan sus habilidades, experiencia laboral y logros relevantes. Este enfoque permite a las empresas encontrar a candidatos que se alineen perfectamente con las necesidades específicas de sus vacantes.'
        />

        <NewArticle 
          title='Ventajas de SkillSwipe'
          text='Elimina la necesidad de depender únicamente de títulos o experiencias previas, permitiendo a los candidatos destacar sus habilidades más relevantes.
          Ahorro de Tiempo y Recursos para las empresas, el proceso de reclutamiento se vuelve más eficiente al encontrar candidatos altamente calificados de manera más rápida.
          Mayor Alineación con la Cultura de la Empresa, al enfocarse en habilidades específicas, las empresas pueden encontrar candidatos que se integren mejor con su cultura y valores.'
        />

        <NewArticle 
          title='Seguridad y Privacidad'
          text='SkillSwipe se compromete a proteger la información personal y profesional de sus usuarios. La plataforma utiliza medidas de seguridad de vanguardia para garantizar la confidencialidad de los perfiles y las comunicaciones.'
        />
    </aside>
  )
}