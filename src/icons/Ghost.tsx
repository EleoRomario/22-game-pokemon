import { SVGProps } from "react"

export const Ghost = (props:SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a9 9 0 0 0-9 9v11l3-3l3 3l3-3l3 3l3-3l3 3V11a9 9 0 0 0-9-9m7 15.17l-1-1l-1.41 1.42L15 19.17l-1.59-1.58L12 16.17l-1.41 1.42L9 19.17l-1.59-1.58L6 16.17l-1 1V11c0-3.86 3.14-7 7-7s7 3.14 7 7zM11 10c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2m6 0c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2"/></svg>
  )
}