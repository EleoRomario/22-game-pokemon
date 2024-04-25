import { SVGProps } from "react"

export const Fairy = (props:SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><g fill="currentColor"><path fill-rule="evenodd" d="M9 .5a.5.5 0 0 1 .479.354l1.928 6.333l5.765 2.107a.5.5 0 0 1 .013.934l-5.727 2.275l-1.979 6.64a.5.5 0 0 1-.958 0l-1.979-6.64l-5.727-2.275a.5.5 0 0 1 .013-.934l5.765-2.107L8.522.854A.5.5 0 0 1 9 .5m0 2.216l-1.523 5a.5.5 0 0 1-.307.324L2.403 9.784l4.734 1.88a.5.5 0 0 1 .294.322l1.57 5.264l1.568-5.264a.5.5 0 0 1 .294-.322l4.734-1.88l-4.767-1.742a.5.5 0 0 1-.307-.324z" clip-rule="evenodd"/><path d="M16.75 19.12c-.1 0-.19-.08-.2-.18c-.18-1.82-.32-2.4-1.99-2.56c-.1-.01-.18-.1-.18-.2s.08-.19.18-.2c1.71-.16 1.81-.6 1.99-2.42c0-.1.1-.18.2-.18s.19.08.2.18c.18 1.82.29 2.26 1.99 2.42c.1.01.18.1.18.2s-.08.19-.18.2c-1.68.16-1.81.74-1.99 2.57c0 .1-.09.18-.2.18z"/></g></svg>
  )
}