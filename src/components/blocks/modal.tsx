import React, { Children, createContext, useContext, useEffect, useState } from "react"
import Button from "../elements/button"

type OverlayProps = {
  children: React.ReactNode
}

type ModelProps = {
  children: React.ReactNode
  open?: boolean
  onClose?: () => void
  onOpen?: () => void
}

type ModelTriggerProps = {
  children: React.ReactNode
}

type ModelContentProps = {
  children: React.ReactNode
}

const ModalContext = createContext<any>(null)

export default function Modal({ children, open, onClose, onOpen }: ModelProps) {
  return <ModalContext.Provider value={{ open, onClose, onOpen }}>{open && <>{children}</>}</ModalContext.Provider>
}

Modal.Overlay = function ({ children }: OverlayProps) {
  const { onClose } = useContext(ModalContext)

  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div
      className="fixed left-0 top-0 z-[10000] flex h-screen w-screen items-center justify-center backdrop-blur-sm"
      onClick={(e) => {
        e.stopPropagation()
        onClose()
      }}
    >
      {children}
    </div>
  )
}

Modal.Trigger = function ({ children, ...props }: ModelTriggerProps) {
  const { onOpen } = useContext(ModalContext)

  return (
    <Button
      {...props}
      onClick={onOpen}
    >
      {children}
    </Button>
  )
}

Modal.Content = function ({ children }: ModelContentProps) {
  return <Modal.Overlay>{children}</Modal.Overlay>
}
