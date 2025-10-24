/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { CardProvide } from '@/components/about/CardProvide';

export default function AboutTeamSection({ data }: { data: any }) {
  return (
    <div className="mb-18 max-w-[1340px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-nest-dark mb-6">
          {data?.section2?.title || 'Câu chuyện của chúng tôi'}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.section2?.cards?.map((item: any, index: number) => (
          <CardProvide data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
