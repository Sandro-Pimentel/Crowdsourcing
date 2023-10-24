import Image from 'next/image'
import ActionCard from './components/ActionCard'
import ProblemItem from './components/ProblemCard'

export default function Home() {
  const problems: IProblem[] = [
    {
      imageUrl: 'https://jpeg.org/images/jpeg-home.jpg',
      description: 'Solution of a problem',
      address: {
        uf: 'SP',
        city: 'Jacareí',
        neighborhood: 'Pq Califórnia'
      },
      deadline: '2023-10-29',
      pix: '2749812344',
      author: 'Sandro Roberto'
    },
    {
      imageUrl: 'https://jpeg.org/images/jpeg-home.jpg',
      description: 'Solution of a problem',
      address: {
        uf: 'SP',
        city: 'Jacareí',
        neighborhood: 'Pq Califórnia'
      },
      deadline: '2023-10-29',
      pix: '2749812344',
      author: 'Sandro Roberto'
    }
  ]
  
  return (
    <main className="flex flex-col items-center">
      <div className='mt-[56px]'>
        <h1 className='text-[56px] text-black font-extrabold text-center'>
          Escolha uma ação para apoiar
        </h1>
      </div>
      <div className='flex flex-wrap gap-8 w-full max-w-[1360px] justify-center py-4'>
        {problems.map((problem, index) => <ProblemItem key={index} problem={problem}/>)}
      </div>
    </main>
  )
}
