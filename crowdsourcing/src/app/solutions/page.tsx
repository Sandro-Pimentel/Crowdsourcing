import Image from 'next/image'
import ActionCard from '../components/ActionCard'


export default function Solutions() {
  const actions: IAction[] = [
    {
    img: 'https://jpeg.org/images/jpeg-home.jpg',
    title: 'Action',
    description: 'Solution for a problem',
    author: 'João Moreira',
    address: {
      uf: 'SP',
      city: 'Jacareí',
      neighborhood: 'Pq Califórnia'
    },
    amountCollected: 150,
    totalGoal: 1000,
    finalDate: '2023-10-29'
  },
  {
    img: 'https://jpeg.org/images/jpeg-home.jpg',
    title: 'Action 2',
    description: 'Solution for a problem 2',
    author: 'Sandro Roberto',
    address: {
      uf: 'SP',
      city: 'Jacareí',
      neighborhood: 'CKP'
    },
    amountCollected: 160,
    totalGoal: 700,
    finalDate: '2023-10-26'
  },
  {
    img: 'https://jpeg.org/images/jpeg-home.jpg',
    title: 'Action 2',
    description: 'Solution for a problem 2',
    author: 'Sandro Roberto',
    address: {
      uf: 'SP',
      city: 'Jacareí',
      neighborhood: 'CKP'
    },
    amountCollected: 160,
    totalGoal: 700,
    finalDate: '2023-10-26'
  },
  {
    img: 'https://jpeg.org/images/jpeg-home.jpg',
    title: 'Action 2',
    description: 'Solution for a problem 2',
    author: 'Sandro Roberto',
    address: {
      uf: 'SP',
      city: 'Jacareí',
      neighborhood: 'CKP'
    },
    amountCollected: 160,
    totalGoal: 700,
    finalDate: '2023-10-26'
  },
  {
    img: 'https://jpeg.org/images/jpeg-home.jpg',
    title: 'Action 2',
    description: 'Solution for a problem 2',
    author: 'Sandro Roberto',
    address: {
      uf: 'SP',
      city: 'Jacareí',
      neighborhood: 'CKP'
    },
    amountCollected: 160,
    totalGoal: 700,
    finalDate: '2023-10-26'
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
        {actions.map((action, index) => <ActionCard key={index} action={action}/>)}
      </div>
    </main>
  )
}
