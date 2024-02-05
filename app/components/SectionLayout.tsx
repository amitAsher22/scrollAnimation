import React from 'react'


interface SectionLayoutProps{
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDialogElement>
}

function SectionLayout({children, ref} : SectionLayoutProps) {
  return (
    <div style={{padding:"5rem 10rem"}}>{children}</div>
  )
}

export default SectionLayout