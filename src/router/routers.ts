export type TMenus = {
  isSpecial?: boolean;
  icon?: string;
  path: string;
  title: string;
  childs?: {
    path: string;
    title: string;
    childs?: {
      path: string;
      title: string;
    }[];
  }[];
}[];

const TMenus: TMenus = [
  {
    path: "/",
    title: "Trang Chủ",
  },
  {
    isSpecial: true,
    icon: "🔥",
    path: "/chuong-trinh-hot",
    title: "Chương Trình Hot",
    childs: [
      { path: "/chuong-trinh-hot/ra-mat-khoa-hoc", title: "Ra Mắt Khóa Học" },
      { path: "/chuong-trinh-hot/combo-sieu-hoi", title: "Combo Siêu Hời" },
      { path: "/chuong-trinh-hot/uu-dai-khoa-le", title: "Ưu Đãi Khóa Lẻ" },
      { path: "/chuong-trinh-hot/flash-sale", title: "Flash Sale" },
      { path: "/chuong-trinh-hot/kho-voucher", title: "Kho Voucher" },
    ],
  },
  {
    path: "/khoa-hoc-dao-tao",
    title: "Khóa Học Đào Tạo",
    childs: [
      {
        path: "/khoa-hoc-dao-tao/y-hoc-co-truyen",
        title: "Y Học Cổ Truyền",
        childs: [
          {
            path: "/khoa-hoc-dao-tao/xoa-bop-bam-huyet",
            title: "Xoa Bóp Bấm Huyệt",
          },
          { path: "/khoa-hoc-dao-tao/spa-massage", title: "Spa - Massage" },
          {
            path: "/khoa-hoc-dao-tao/dieu-tri-nang-cao",
            title: "Điều Trị Nâng Cao",
          },
          { path: "/khoa-hoc-dao-tao/duoc-lieu", title: "Dược Liệu" },
          { path: "/khoa-hoc-dao-tao/cham-cuu", title: "Châm Cứu" },
        ],
      },
      {
        path: "/khoa-hoc-dao-tao/tam-ly-hoc",
        title: "Tâm Lý Học",
        childs: [
          {
            path: "/khoa-hoc-dao-tao/giao-duc-dac-biet",
            title: "Giáo Dục Đặc Biệt",
          },
          {
            path: "/khoa-hoc-dao-tao/tam-ly-cam-xuc",
            title: "Tâm Lý & Cảm Xúc",
          },
          { path: "/khoa-hoc-dao-tao/yoga", title: "Yoga" },
        ],
      },
      {
        path: "/khoa-hoc-dao-tao/van-dong",
        title: "Vận Động",
        childs: [
          { path: "/khoa-hoc-dao-tao/vo-thuat", title: "Võ Thuật" },
          {
            path: "/khoa-hoc-dao-tao/fitness-dance",
            title: "Fitness & Dance Fitness",
          },
          { path: "/khoa-hoc-dao-tao/vo-bao", title: "Võ Bao" },
        ],
      },
      {
        path: "/khoa-hoc-dao-tao/nghe-thuat",
        title: "Nghệ Thuật",
        childs: [
          { path: "/khoa-hoc-dao-tao/cam-hoc", title: "Cảm Học" },
          { path: "/khoa-hoc-dao-tao/guitar", title: "Guitar" },
          { path: "/khoa-hoc-dao-tao/piano", title: "Piano" },
          { path: "/khoa-hoc-dao-tao/my-thuat", title: "Mỹ Thuật" },
          { path: "/khoa-hoc-dao-tao/thanh-nhac", title: "Thanh Nhạc" },
          { path: "/khoa-hoc-dao-tao/dien-kich", title: "Diễn Kịch" },
          { path: "/khoa-hoc-dao-tao/dien-tranh", title: "Điển Tranh" },
        ],
      },
      {
        path: "/khoa-hoc-dao-tao/dinh-duong",
        title: "Dinh Dưỡng",
        childs: [
          { path: "/khoa-hoc-dao-tao/benh-ly", title: "Dinh Dưỡng Bệnh Lý" },
          { path: "/khoa-hoc-dao-tao/ho-tro", title: "Sinh Dưỡng Hỗ Trợ" },
        ],
      },
      {
        path: "/khoa-hoc-dao-tao/y-hoc-hien-dai",
        title: "Y Học Hiện Đại",
        childs: [
          {
            path: "/khoa-hoc-dao-tao/phuc-hoi-chuc-nang",
            title: "Phục Hồi Chức Năng",
          },
          { path: "/khoa-hoc-dao-tao/du-lieu", title: "Dữ Liệu" },
          { path: "/khoa-hoc-dao-tao/lam-dep", title: "Làm Đẹp" },
          { path: "/khoa-hoc-dao-tao/nhi-khoa", title: "Nhi Khoa" },
          {
            path: "/khoa-hoc-dao-tao/cham-soc-da",
            title: "Chăm Sóc Da Bằng Máy Móng",
          },
          {
            path: "/khoa-hoc-dao-tao/suc-khoe-phu-nu",
            title: "Sức Khỏe Phụ Nữ",
          },
        ],
      },
    ],
  },
  {
    path: "/giang-vien",
    title: "Giảng Viên",
  },
  {
    path: "/san-pham",
    title: "Sản Phẩm",
  },
  {
    path: "/ve-ome",
    title: "Về OME",
  },
  {
    path: "/lien-he",
    title: "Liên Hệ",
  },
];

export default TMenus;
