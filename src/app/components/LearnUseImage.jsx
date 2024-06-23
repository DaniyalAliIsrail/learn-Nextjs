import Image from 'next/image'
import MyImage from "../../../public/neonimg.jpg"

const LearnUseImage = () => {
  return (
    <>
    <Image src={MyImage} alt="myImagecode" width={200} />
    Image page
    </>
  )
}

export default LearnUseImage