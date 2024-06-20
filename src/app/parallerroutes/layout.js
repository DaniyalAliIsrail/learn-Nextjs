import left from "./@left/page";
import right from "./@right/page";

export default function parallelroutes({ children,left,right }) {
  return (
    <section>
      parallelroutes
      {children}
      {left}
      {right}
    </section>
  );
}
