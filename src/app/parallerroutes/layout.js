
export default function ({children,left,right}){
  const conditionRendering = true;
return(
  <section>
  
    {children}
    {/* {left}
    {right} */}
    {
      conditionRendering ? right :left
    }
  </section>
)
}