import { FaRegTrashCan } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";

import { FiPlusCircle } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

import CmsAdmin__logo from '../../assets/images/P_G_Logo.png';

import './CmsAdmin.GlobalStyles.scss';
function CmsAdmin() {

    return ( 
        <div className="CmsAdmin">
            <header className="CmsAdmin__header">
                <div className="CmsAdmin__header__left">
                    <img className="CmsAdmin__header__left__logo" src={ CmsAdmin__logo} />
                </div>
                <div className="CmsAdmin__header__middle">
                    <span className="CmsAdmin__header__middle__heroText">CMS Procter & Gamble Company</span>
                </div>
                <div className="CmsAdmin__header__right">
                    <RxAvatar className="CmsAdmin__header__right__avatar"/>
                    <span className="CmsAdmin__header__right__nameAdmin">Admin</span>
                    <IoIosArrowDown className="CmsAdmin__header__right__iconArrow"/>
                </div>
            </header>
            <div className="CmsAdmin__body">
                <div className="CmsAdmin__body__left">
                    <div className="CmsAdmin__body__left__taskbar">
                        <div className="CmsAdmin__body__left__taskbar__firstItem">
                            <div className="CmsAdmin__body__left__taskbar__title">
                                <span className="CmsAdmin__body__left__taskbar__title__text">Các Nhãn Hiệu Của Chúng Tôi</span>
                                <IoIosArrowDown className="CmsAdmin__body__left__taskbar__title__icon"/>
                            </div>
                            <div className="CmsAdmin__body__left__taskbar__dropDown">
                                <div className="CmsAdmin__body__left__taskbar__dropDown__page">Các Nhãn Hiệu</div>
                                <div className="CmsAdmin__body__left__taskbar__dropDown__page">Đổi Mới</div>
                                <div className="CmsAdmin__body__left__taskbar__dropDown__page">An Toàn Sản Phẩm</div>
                                <div className="CmsAdmin__body__left__taskbar__dropDown__page">Thành Phần</div>
                                <div className="CmsAdmin__body__left__taskbar__dropDown__page">#ECRUELTYREE</div>
                            </div>
                        </div>
                        <div className="CmsAdmin__body__left__taskbar__secondItem">
                             <div className="CmsAdmin__body__left__taskbar__title">
                                <span className="CmsAdmin__body__left__taskbar__title__text">Ảnh Hưởng Của Chúng Tôi</span>
                                <IoIosArrowDown className="CmsAdmin__body__left__taskbar__title__icon"/>
                            </div>
                            <div className="CmsAdmin__body__left__taskbar__dropDown">
                                <div className="CmsAdmin__body__left__taskbar__dropDown__page">Ảnh Hưởng Cộng Đồng</div>
                                <div className="CmsAdmin__body__left__taskbar__dropDown__page">
                                    <div className="CmsAdmin__body__left__taskbar__dropDown__page__sub"> 
                                        <div className="CmsAdmin__body__left__taskbar__dropDown__page__sub__title">Bình Đẳng Và Hòa Nhập</div>
                                        <IoIosArrowDown className="CmsAdmin__body__left__taskbar__dropDown__page__sub__icon" />
                                    </div>
                                    <div className="CmsAdmin__body__left__taskbar__dropDown__page__sub__link">
                                        <sapn className="CmsAdmin__body__left__taskbar__dropDown__page__sub__text">Bình Đẳng Giới</sapn>
                                        <sapn className="CmsAdmin__body__left__taskbar__dropDown__page__sub__text">Người Khuyết Tật</sapn>
                                        <sapn className="CmsAdmin__body__left__taskbar__dropDown__page__sub__text">QLGBT+</sapn>
                                    </div>
                                </div >
                                <div className="CmsAdmin__body__left__taskbar__dropDown__page">
                                    <div className="CmsAdmin__body__left__taskbar__dropDown__page__sub">
                                        <div className="CmsAdmin__body__left__taskbar__dropDown__page__sub__title">Bền Vững</div>
                                        <IoIosArrowDown className="CmsAdmin__body__left__taskbar__dropDown__page__sub__icon"/>
                                    </div>
                                    <div className="CmsAdmin__body__left__taskbar__dropDown__page__sub__link">
                                        <sapn className="CmsAdmin__body__left__taskbar__dropDown__page__sub__text">Làm Đẹp Có Trách Nhiệm</sapn>
                                    </div>
                                </div>
                                <div className="CmsAdmin__body__left__taskbar__dropDown__page">Đạo Đức Và Trách Nhiệm Doanh Nghiệp</div>
                            </div>
                        </div>
                        <div className="CmsAdmin__body__left__taskbar__thirdItem">
                            <div className="CmsAdmin__body__left__taskbar__title">
                                <span className="CmsAdmin__body__left__taskbar__title__text">Câu Chuyện Của Chúng Tôi</span>
                                <IoIosArrowDown className="CmsAdmin__body__left__taskbar__title__icon"/>
                            </div>
                            <div className="CmsAdmin__body__left__taskbar__dropDown">
                                <div className="CmsAdmin__body__left__taskbar__dropDown__page">Chúng Tôi là ai</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="CmsAdmin__body__right">
                    <div className="CmsAdmin__body__right__top">
                        <div className="CmsAdmin__body__right__top__create">
                            <span className="CmsAdmin__body__right__top__create__text">Admin Quản Lý</span>
                            <div className="CmsAdmin__body__right__top__create__background">
                                <FiPlusCircle className="CmsAdmin__body__right__top__create__icon"/>
                            </div>
                        </div>
                        <div className="CmsAdmin__body__right__top__searchButton">
                            <input className="CmsAdmin__body__right__top__searchButton__input" type="text" placeholder="Nhập gì đó..."/>
                            <button className="CmsAdmin__body__right__top__searchButton__btn">Tìm Kiếm</button>
                        </div>
                    </div>
                    <div className="CmsAdmin__body__right__bottom">
                        <div className="CmsAdmin__body__right__bottom__title">
                            <div className="CmsAdmin__body__right__bottom__title__hero">
                                <input type="checkbox" name="checkbox" />
                                <p>Title</p>
                                <p>Article</p>
                                <p>Content</p>
                                <p>Excerpt</p>
                                <p>Images</p>
                                <p>Action</p>
                            </div>
                        </div>
                        <div className="CmsAdmin__body__right__bottom__content">
                            <div className="CmsAdmin__body__right__bottom__content__hero">
                                <input type="checkbox" name="checkbox" />
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <div className="CmsAdmin__body__right__bottom__content__hero__icon">
                                    <FaRegTrashCan />
                                    <FaPen />
                                </div>
                            </div>
                        </div>
                        <div className="CmsAdmin__body__right__bottom__content">
                            <div className="CmsAdmin__body__right__bottom__content__hero">
                                <input type="checkbox" name="checkbox" />
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <div className="CmsAdmin__body__right__bottom__content__hero__icon">
                                    <FaRegTrashCan />
                                    <FaPen />
                                </div>
                            </div>
                        </div>
                        <div className="CmsAdmin__body__right__bottom__content">
                            <div className="CmsAdmin__body__right__bottom__content__hero">
                                <input type="checkbox" name="checkbox" />
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <div className="CmsAdmin__body__right__bottom__content__hero__icon">
                                    <FaRegTrashCan />
                                    <FaPen />
                                </div>
                            </div>
                        </div>
                        <div className="CmsAdmin__body__right__bottom__content">
                            <div className="CmsAdmin__body__right__bottom__content__hero">
                                <input type="checkbox" name="checkbox" />
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <div className="CmsAdmin__body__right__bottom__content__hero__icon">
                                    <FaRegTrashCan />
                                    <FaPen />
                                </div>
                            </div>
                        </div>
                        <div className="CmsAdmin__body__right__bottom__content">
                            <div className="CmsAdmin__body__right__bottom__content__hero">
                                <input type="checkbox" name="checkbox" />
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <div className="CmsAdmin__body__right__bottom__content__hero__icon">
                                    <FaRegTrashCan />
                                    <FaPen />
                                </div>
                            </div>
                        </div>
                        <div className="CmsAdmin__body__right__bottom__content">
                            <div className="CmsAdmin__body__right__bottom__content__hero">
                                <input type="checkbox" name="checkbox" />
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <div className="CmsAdmin__body__right__bottom__content__hero__icon">
                                    <FaRegTrashCan />
                                    <FaPen />
                                </div>
                            </div>
                        </div>
                        <div className="CmsAdmin__body__right__bottom__content">
                            <div className="CmsAdmin__body__right__bottom__content__hero">
                                <input type="checkbox" name="checkbox" />
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <span>loading...</span>
                                <div className="CmsAdmin__body__right__bottom__content__hero__icon">
                                    <FaRegTrashCan />
                                    <FaPen />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="CmsAdmin__footer">© 2024 Procter & Gamble</footer>
        </div>
     );
}

export default CmsAdmin;