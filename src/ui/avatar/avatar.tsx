import Image from "next/image";

import avatar from './avatar.png'

function Avatar() {
    return <Image className="w-14 h-14 rounded-full" src={avatar} width={60} height={60} alt="João Alberto" />
}

export { Avatar }