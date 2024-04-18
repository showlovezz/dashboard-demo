import { Button } from '@/components/ui/button';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <>
      <h1 className='flex gap-2 items-center'><PersonStandingIcon size={50} className='text-pink-500'/> Dashboard Demo</h1>
      <p>The best dashboard to manage customer support</p>
      <div className='flex gap-2 items-center'>
        <Button asChild>
          <Link href='/login'>Log in</Link>
        </Button>
        <small>or</small>
        <Button asChild variant='outline'>
          <Link href='/signup'>Sign up</Link>
        </Button>
      </div>
    </>
  )
}

export default LandingPage