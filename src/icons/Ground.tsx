import { SVGProps } from "react"

export const Ground = (props:SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.025 14.85q-.4-.3-.387-.787t.412-.788q.275-.2.6-.2t.6.2L12 18.5l6.75-5.225q.275-.2.6-.2t.6.2q.4.3.413.787t-.388.788l-6.75 5.25q-.55.425-1.225.425t-1.225-.425zm6.75.2l-5.75-4.475Q4.25 9.975 4.25 9t.775-1.575l5.75-4.475q.55-.425 1.225-.425t1.225.425l5.75 4.475q.775.6.775 1.575t-.775 1.575l-5.75 4.475q-.55.425-1.225.425t-1.225-.425M12 13.45L17.75 9L12 4.55L6.25 9zM12 9"/></svg>
  )
}