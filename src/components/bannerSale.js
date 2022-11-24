import './bannerSale.scss';

export const BannerSale = () => {
   return (

      <div className='bannerSale'>
         <p className='nameSale'>большие осенние скидки</p>
         <p className='conditionSale'>до</p>
         <p className='numberSale'>60</p>
         <p className='percentageSale'>%</p>
         
         <div className='buttonChange'>
         <a  href='#' alt='Button chage books'>
            <p>Обменяй старые книги на новые</p>
            <svg width="57" height="14" viewBox="0 0 57 14" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0 7H54" stroke="#1C2A39" stroke-width="2" />
               <path d="M48 1L55 7L48 13" stroke="#1C2A39" stroke-width="2" />
            </svg>

         </a>
         </div>
         <div className='buttonTopBooks'>
         <a  href='#' alt='Button top books'>
            <p>Топ 100 книг 2022</p>
            <svg width="57" height="14" viewBox="0 0 57 14" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0 7H54" stroke="#1C2A39" stroke-width="2" />
               <path d="M48 1L55 7L48 13" stroke="#1C2A39" stroke-width="2" />
            </svg>

         </a>
         </div>

      </div>

   )


}