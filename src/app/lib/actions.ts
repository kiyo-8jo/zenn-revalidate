'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

export async function revalidateAll() {
  revalidatePath('/')
}

export async function revalidateClassA() {
  revalidateTag('classA')
}

export async function revalidateClassB() {
  revalidateTag('classB')
}