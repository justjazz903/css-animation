import Button_1 from '@/components/button_1/Button';
import Button_2 from '@/components/button_2/Button';
import Button_3 from '@/components/button_3/Button';
import Button_4 from '@/components/button_4/Button';
import Button_5 from '@/components/button_5/Button';
import Button_6 from '@/components/button_6/Button';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center my-8 space-y-16">
      <Button_1 />
      <Button_2 />
      <Button_3 />
      <Button_4 />
      <Button_5 />
      <Button_6 />
    </div>
  );
}
