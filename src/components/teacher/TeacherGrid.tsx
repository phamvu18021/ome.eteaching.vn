/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import TeacherCard from './TeacherCard';
import { TeacherGridProps } from '@/types/teacher';
import Pagination from '../ui/Pagination';

const TeacherGrid: React.FC<TeacherGridProps> = ({ teachers, viewMode = 'grid' }) => {
  if (teachers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Không tìm thấy sản phẩm nào</p>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <div className="bg-white ">
        <div className="space-y-6 mb-4">
          {teachers.map((teacher: any) => (
            <TeacherCard key={teacher.id} teacher={teacher} viewMode="list" />
          ))}
        </div>
        <Pagination currentPage={1} totalPages={2} onPageChange={() => {}} />
      </div>
    );
  }

  return (
    <div className="bg-white ">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
        {teachers.map((teacher: any) => (
          <TeacherCard key={teacher.id} teacher={teacher} viewMode="grid" />
        ))}
      </div>
      <Pagination currentPage={1} totalPages={2} onPageChange={() => {}} />
    </div>
  );
};

export default TeacherGrid;