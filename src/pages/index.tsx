import type { NextPage } from 'next'
import { Accordion } from '~/components/accordion';

const Home: NextPage = () => {
  const contents: Array<{ id: number; label: string; text: string }> = [{ id: 0, label: 'test1', text: 'test text' },{ id: 1, label: 'test2', text: 'test text' }]

  return (
    <Accordion contents={contents} />
  )
}

export default Home
