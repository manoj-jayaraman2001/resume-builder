

const Images = () => {
   

 
    const modules = import.meta.glob('../../../public/templateImages/*.png', { eager: true })
    const images = Object.keys(modules)
    
   
    return (images);
}
 
export default Images;
