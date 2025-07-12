(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=r(i.map(r=>{if(r=t(r,a),r in n)return;n[r]=!0;let i=r.endsWith(`.css`),o=i?`[rel="stylesheet"]`:``,c=!!a;if(c)for(let e=s.length-1;e>=0;e--){let t=s[e];if(t.href===r&&(!i||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=i?`stylesheet`:e,i||(u.as=`script`),u.crossOrigin=``,u.href=r,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),i)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})};async function i(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function a(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function o(){let e=await fetch(`/api/categories`);return await e.json()}var s=class{constructor(){this.state={cartItems:[],cartItemCount:0},this.listeners=[]}subscribe(e){this.listeners.push(e)}notify(){this.listeners.forEach(e=>e()),requestAnimationFrame(()=>{this.listeners.forEach(e=>e())})}addToCart(e){let t=parseInt(e);return this.state.cartItems.includes(t)?{success:!1,message:`이미 장바구니에 있는 상품입니다.`,isDuplicate:!0,currentCount:this.state.cartItemCount}:(this.state.cartItems.push(t),this.state.cartItemCount=this.state.cartItems.length,this.notify(),window.dispatchEvent(new CustomEvent(`cartUpdated`,{detail:this.state.cartItemCount})),{success:!0,message:`장바구니에 추가되었습니다.`,isDuplicate:!1,currentCount:this.state.cartItemCount})}removeFromCart(e){this.state.cartItems=this.state.cartItems.filter(t=>t!==e)}getCartItems(){return this.state.cartItems}getCartItemCount(){return this.state.cartItems.length}};const c=new s;var l=c;function u({product:e}){return`
    <div
      class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
      data-product-id="${e.productId}"
    >
      <!-- 상품 이미지 -->
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img
          src="${e.image}"
          alt="${e.title}"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${e.title}</h3>
          <p class="text-xs text-gray-500 mb-2">${e.brand}</p>
          <p class="text-lg font-bold text-gray-900">${parseInt(e.lprice).toLocaleString(`ko-KR`)}원</p>
        </div>
        <!-- 장바구니 버튼 -->
        <button
          class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                 hover:bg-blue-700 transition-colors add-to-cart-btn"
          data-product-id="${e.productId}"
        >
          장바구니 담기
        </button>
      </div>
    </div>
  `}function d(e){l.addToCart(parseInt(e)),ee(e)}function ee(e){let t=document.querySelector(`[data-product-id="${e}"] .add-to-cart-btn`);if(t){let e=t.textContent;setTimeout(()=>{t.textContent=e,t.classList.remove(`bg-green-600`,`bg-gray-500`),t.classList.add(`bg-blue-600`)},1e3)}}function f(){document.addEventListener(`click`,e=>{if(e.target.classList.contains(`add-to-cart-btn`)){e.preventDefault(),e.stopPropagation();let t=e.target.dataset.productId;d(t)}})}window.handleAddToCart=d;var p=u;function m({count:e=1}){let t=Array.from({length:e},(e,t)=>t);return t.map((e,t)=>`
        <div key=${t} class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
              <div class="aspect-square bg-gray-200"></div>
              <div class="p-3">
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div class="h-8 bg-gray-200 rounded"></div>
              </div>
        </div>
  `).join(``)}var h=m,g=class{constructor(){this.state={products:[],categories:{},pagination:{total:340,hasNext:!1,current:1,limit:20,sort:`price_asc`,category1:``,category2:``},filters:{},loading:!1,isLoadingMore:!1,error:null},this.listeners=[]}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notify(){this.listeners.forEach(e=>e(this.state))}setState(e){this.state={...this.state,...e},this.notify()}setPagination(e){this.setState({pagination:e,loading:!1,error:null})}setFilters(e){this.setState({filters:e,loading:!1,error:null})}setLoading(e){this.setState({loading:e,error:null})}setProducts(e){this.setState({products:e,loading:!1,error:null})}setCategories(e){this.setState({categories:e,loading:!1,error:null})}setLoadingMore(e){this.setState({isLoadingMore:e})}addProducts(e){let t=this.state.products,n=[...t,...e];this.setState({products:n,isLoadingMore:!1,error:null})}canMoreData(){let{pagination:e,isLoadingMore:t}=this.state;return e.hasNext&&!t}setError(e){this.setState({error:e,loading:!1})}getFiltersFromURL(){let e=new URL(window.location.href);return{search:e.searchParams.get(`search`)||``,limit:parseInt(e.searchParams.get(`limit`))||20,sort:e.searchParams.get(`sort`)||`price_asc`,category1:e.searchParams.get(`category1`)||``,category2:e.searchParams.get(`category2`)||``,current:parseInt(e.searchParams.get(`current`))||1}}updateFilter(e,t){let n={...this.state.filters,[e]:t};e!==`current`&&(n.current=1);let r=new URL(window.location.href);return Object.keys(n).forEach(e=>{n[e]?r.searchParams.set(e,n[e]):r.searchParams.delete(e)}),window.history.pushState({},``,r),this.setFilters(n),n}reset(){this.state={products:[],categories:{},pagination:{},filters:{},loading:!1,isLoadingMore:!1,error:null},this.listeners=[]}};const _=new g;function v(e,t){let n=new URLSearchParams(window.location.search);return n.get(e)||t}function te(){let e=()=>`
      <div data-breadcrumb-container class="flex items-center gap-2">
       ${t()}
      </div>
     
    `,t=()=>{let e=v(`category1`),t=v(`category2`),n=`
    <label class="text-sm text-gray-600">카테고리:</label>
    <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
  `;return e&&(n+=`
         <span class="text-xs text-gray-500">&gt;</span>
        <button data-breadcrumb="category1" data-category1="${e}" class="text-xs hover:text-blue-800 hover:underline">${e}</button>
        `,t&&(n+=`
            <span class="text-xs text-gray-500">&gt;</span>
            <span class="text-xs text-gray-600 cursor-default">${t}</span>
          `)),n},n=()=>{let e=document.querySelector(`[data-breadcrumb-container]`);e&&(e.innerHTML=t())};return{render:e,update:n}}var y=te;let b=null;function ne(){let e=()=>`
      <div class="space-y-2">
        ${y().render()}
        <div class="flex flex-wrap gap-2" data-category-container>${x()}</div>
      </div>
    `,t=e=>{let{category1:t,category2:n}=e.dataset,i=new URL(window.location.href);n?(i.searchParams.set(`category1`,t),i.searchParams.set(`category2`,n),window.history.pushState({},``,i)):t&&(i.searchParams.set(`category1`,t),i.searchParams.delete(`category2`),window.history.pushState({},``,i)),r(),window.dispatchEvent(new CustomEvent(`loadList`))},n=()=>{let e=new URL(window.location.href);e.searchParams.delete(`category1`),e.searchParams.delete(`category2`),window.history.pushState({},``,e),r(),window.dispatchEvent(new CustomEvent(`loadList`))},r=()=>{let e=document.querySelector(`[data-category-container]`);e&&(e.innerHTML=x()),y().update()},i=()=>{let e=document.getElementById(`filter-container`);e&&e.addEventListener(`click`,e=>{let{category1:i,breadcrumb:a}=e.target.dataset;if(e.target.classList.contains(`category1-filter-btn`))t(e.target);else if(a===`reset`)n();else if(a===`category1`){let e=new URL(window.location.href);e.searchParams.set(`category1`,i),e.searchParams.delete(`category2`),window.history.pushState({},``,e),r()}})};return b=_.subscribe(()=>{r()}),{render:e,setup:i,update:r,reset:n}}function x(){let{categories:e}=_.state,t=v(`category1`);if(!e||Object.keys(e).length===0)return`
      <div class="flex flex-wrap gap-2">
        <div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>
      </div>`;if(t){let n=e[t]?Object.keys(e[t]):[];return`
      ${n.map(e=>`
            <button data-category1="${t}" data-category2="${e}" class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50">${e}</button>
          `).join(``)}
    `}else{let t=Object.keys(e);return`
      ${t.map(e=>`
            <button data-category1="${e}" class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50">${e}</button>
          `).join(``)}
    `}}function S(){b&&(b(),b=null)}var C=ne;let w=null;function T(){let e=E();return w=_.subscribe(D),e}function E(){return`
    <div id="filter-container" class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <!-- 검색창 -->
      <div class="mb-4">
        <div class="relative">
          <input
            type="text"
            id="search-input"
            placeholder="상품명을 검색해보세요..."
            value=""
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <!-- 필터 옵션 -->
      <div class="space-y-3">
        <!-- 카테고리 필터 -->
        ${C().render()}
        <!-- 기존 필터들 -->
        <div class="flex gap-2 items-center justify-between">
          <!-- 페이지당 상품 수 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">개수:</label>
            <select
              id="limit-select"
              class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="10">10개</option>
              <option value="20" selected="">20개</option>
              <option value="50">50개</option>
              <option value="100">100개</option>
            </select>
          </div>
          <!-- 정렬 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">정렬:</label>
            <select
              id="sort-select"
              class="text-sm border border-gray-300 rounded px-2 py-1
                             focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="price_asc" selected="">가격 낮은순</option>
              <option value="price_desc">가격 높은순</option>
              <option value="name_asc">이름순</option>
              <option value="name_desc">이름 역순</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  `}function D(e){console.log(e)}function O(){w&&(w(),w=null),S()}function re(){C().setup();let e=new URL(window.location.href),t=new URLSearchParams(e.search),n=t.get(`limit`),r=t.get(`sort`),i=t.get(`search`);if(i){let e=document.querySelector(`#search-input`);e&&(e.value=i)}if(n){let e=document.querySelector(`#limit-select`);e&&(e.value=n)}if(r){let e=document.querySelector(`#sort-select`);e&&(e.value=r)}let a=document.getElementById(`filter-container`);a&&(a.addEventListener(`change`,e=>{let{id:t,value:n}=e.target;if(t===`limit-select`){let e=n,t=new URL(window.location.href);t.searchParams.set(`limit`,e),t.searchParams.set(`current`,1),window.history.pushState({},``,t),window.dispatchEvent(new CustomEvent(`loadList`))}if(t===`sort-select`){let e=n,t=new URL(window.location.href);t.searchParams.set(`sort`,e),window.history.pushState({},``,t),window.dispatchEvent(new CustomEvent(`loadList`))}}),a.addEventListener(`keydown`,e=>{let{id:t,value:n}=e.target;if(t===`search-input`&&e.key===`Enter`){let e=n,t=new URL(window.location.href);t.searchParams.set(`search`,e),window.history.pushState({},``,t),window.dispatchEvent(new CustomEvent(`loadList`))}}))}var ie=T;function ae(){return`
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" data-modal-backdrop></div>
  `}function oe(){return`
    <div id="modal">
      ${ae()}
      <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4" id="modal">
        <div
          class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden"
        >
          <!-- 헤더 -->
          <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h2 class="text-lg font-bold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                ></path>
              </svg>
              장바구니
            </h2>

            <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- 컨텐츠 -->
          <div class="flex flex-col max-h-[calc(90vh-120px)]">
            <!-- 빈 장바구니 -->
            <div class="flex-1 flex items-center justify-center p-8">
              <div class="text-center">
                <div class="text-gray-400 mb-4">
                  <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
                <p class="text-gray-600">원하는 상품을 담아보세요!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function se(){let e=document.createElement(`div`);e.id=`cart-modal`,e.innerHTML=oe(),document.body.appendChild(e),ce(e)}function ce(e){let t=e.querySelector(`[data-modal-close-btn]`);t&&t.addEventListener(`click`,()=>k())}function k(){let e=document.getElementById(`cart-modal`);e&&document.body.removeChild(e)}function A(e=`쇼핑몰`){return`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold text-gray-900">
            <a href="/" data-link="">${e}</a>
          </h1>
          <div class="flex items-center space-x-2">
            <!-- 장바구니 아이콘 -->
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <span id="cart-count">${l.state.cartItems.length||0}</span>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  `}function j(){let e=document.getElementById(`cart-count`);if(!e)return;let t=l.getCartItemCount();t>0?(e.textContent=t,e.style.display=`flex`):e.style.display=`none`}function M(){let e=document.getElementById(`cart-icon-btn`);e&&e.addEventListener(`click`,()=>{se()}),j(),l.subscribe(j),window.addEventListener(`cartUpdated`,e=>{console.log(`전역 이벤트로 장바구니 업데이트:`,e.detail),j()})}function N(){return`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `}var P=N;let F=null;function I(){let e=new URLSearchParams(window.location.search),t={limit:e.get(`limit`)||`20`,sort:e.get(`sort`)||`price_asc`,search:e.get(`search`)||``,category1:e.get(`category1`)||``,category2:e.get(`category2`)||``};return Object.keys(t).forEach(e=>{t[e]===``&&delete t[e]}),t}async function L(){var e;let{state:t}=_;if(t.isLoadingMore||!(e=t.pagination)?.hasNext)return;_.setLoadingMore(!0);let n=document.getElementById(`loading-text`);n&&(n.textContent=`상품을 불러오는 중...`);try{var r,a;let e=I(),t=(r=_.state.pagination)?.page||1;console.log(t);let o=await i({page:t+1,...e});if(n&&(n.textContent=`상품을 불러오는 중...`),!o.products||o.products.length===0){_.setPagination({..._.state.pagination,hasNext:!1});return}_.addProducts(o.products),_.setPagination(o.pagination),n&&(n.textContent=(a=o.pagination)?.hasNext?``:`모든 상품을 불러왔습니다.`)}catch(e){console.error(`무한스크롤 에러:`,e),n&&(n.textContent=`상품을 불러오는데 실패했습니다.`)}finally{_.setLoadingMore(!1)}}function R(){var e,t;if(_.state.isLoadingMore||!(e=_.state.pagination)?.hasNext)return;let n=Math.max(document.documentElement.scrollTop,document.body.scrollTop),r=window.innerHeight,i=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),a=500,o=(t=window.navigator)?.webdriver||process.env.NODE_ENV===`test`;if(o){L();return}n+r>=i-a&&L()}function z(){let e=!1;return()=>{if(!e){var t;(t=window.navigator)?.webdriver||window.playwright?(R(),e=!1):window.requestAnimationFrame(()=>{R(),e=!1}),e=!0}}}function B(){F&&window.removeEventListener(`scroll`,F),F=z(),window.addEventListener(`scroll`,F)}function V(){let e=document.getElementById(`loading-text`);e&&(e.textContent=`스크롤하여 더 많은 상품 보기`)}function H(){F&&(window.removeEventListener(`scroll`,F),F=null),window.infiniteScrollInterval&&(clearInterval(window.infiniteScrollInterval),window.infiniteScrollInterval=null),delete window.loadMoreProducts,delete window.triggerInfiniteScroll,delete window.forceLoadMore}const U=_;let W=!1,G=null;const le=async()=>{let e=await o();return e},K=async()=>{let e={limit:v(`limit`,20),sort:v(`sort`,`price_asc`),page:v(`current`,`1`),search:v(`search`,``),category1:v(`category1`,``),category2:v(`category2`,``)};Object.keys(e).forEach(t=>{e[t]===``&&delete e[t]});let t=await i(e);return U.setPagination(t.pagination),t.products},ue=async()=>{if(!W){W=!0,J();try{let[e,t]=await Promise.all([le(),K()]);U.setCategories(e),U.setProducts(t),J()}catch(e){U.setError(e.message)}finally{W=!1,J()}}},q=async()=>{if(!U.state.loading)try{W=!0,J();let e=await K();U.setProducts(e),J(),V()}catch(e){U.setError(e.message)}finally{W=!1,J()}},J=()=>{let{state:e}=U,t=document.getElementById(`products-grid`),n=document.getElementById(`loading-text`);if(!t||!n){setTimeout(()=>J(),100);return}if(W){t.innerHTML=h({count:10}),n.textContent=`상품을 불러오는 중...`;let e=document.getElementById(`product-count`);if(e){e.remove();return}}else{let r=Array.isArray(e.products)?e.products:[],i=r.map(e=>p({product:e})).join(``);t.innerHTML=i,n.textContent=`상품을 불러오는 중...`;let a=document.getElementById(`product-count`);a||(a=document.createElement(`div`),a.id=`product-count`,a.className=`mb-4 text-sm text-gray-600`,t.parentNode.insertBefore(a,t)),a.innerHTML=`총 <span class="font-medium text-gray-900">${e.pagination.total}개</span>의 상품`}if(window.loadFlag&&!W){let t=Array.isArray(e.products)?e.products:[];t.length===20&&setTimeout(()=>{window.loadMoreProducts&&window.loadMoreProducts()},2e3)}},de=()=>{let e=document.getElementById(`products-grid`);e&&e.addEventListener(`click`,e=>{if(e.target.closest(`.add-to-cart-btn`))return;let t=e.target.closest(`.product-card`);if(t){let e=t.dataset.productId;window.router.navigate(`/product/${e}`)}}),window.addEventListener(`loadList`,()=>{q()})};function fe(){let e=async()=>{try{G=_.subscribe(()=>{J()}),J(),re(),M(),f(),await ue(),window.loadMoreProducts=L,de(),setTimeout(()=>{B()},100)}catch(e){console.error(`Home 초기화 실패:`,e),U.setError(e.message)}},t=()=>`
      <div class="min-h-screen bg-gray-50">
        ${A()}
        <main class="max-w-md mx-auto px-4 py-4">
          ${ie()}

          <div class="mb-6">
            <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid"></div>
            <div class="text-center py-4 text-sm text-gray-500" id="loading-text"></div>
          </div>
        </main>
        ${P()}
      </div>
    `,n=()=>{O(),H(),window.removeEventListener(`loadList`,q),delete window.loadMoreProducts,delete window.triggerInfiniteScroll,delete window.forceLoadMore,_.reset(),G=_.unsubscribe(G)};return{setup:e,cleanup:n,render:t}}var pe=fe;function me(){return`
    <div class="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
      <div class="flex-shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <p class="text-sm font-medium">장바구니에 추가되었습니다</p>
      <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `}var he=me;let Y=null,X=!1;const ge=async e=>{try{X=!0;let t=await a(e);return X=!1,t}catch(e){X=!1,console.error(e)}},_e=async(e,t)=>{let n=await i({category1:e,category2:t});return n},Z=e=>X||!e?`
      <div class="py-20 bg-gray-50 flex items-center justify-center">
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p class="text-gray-600">상품 정보를 불러오는 중...</p>
        </div>
      </div>
    `:`
      <div class="bg-white rounded-lg shadow-sm mb-6">
        <!-- 상품 이미지 -->
        <div class="p-4">
          <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img
              src="${e.image}"
              alt="${e.title}"
              class="w-full h-full object-cover product-detail-image"
            />
          </div>
          <!-- 상품 정보 -->
          <div>
            <p class="text-sm text-gray-600 mb-1"></p>
            <h1 class="text-xl font-bold text-gray-900 mb-3">${e.title}</h1>
            <!-- 평점 및 리뷰 -->
            <div class="flex items-center mb-3">
              <div class="flex items-center">${ve(e.rating)}</div>
              <span class="ml-2 text-sm text-gray-600">${e.rating} (${e.reviewCount}개 리뷰)</span>
            </div>
            <!-- 가격 -->
            <div class="mb-4">
              <span class="text-2xl font-bold text-blue-600">${e.lprice}원</span>
            </div>
            <!-- 재고 -->
            <div class="text-sm text-gray-600 mb-4">${e.stock}개</div>
            <!-- 설명 -->
            <div class="text-sm text-gray-700 leading-relaxed mb-6">${e.description}</div>
          </div>
        </div>
        <!-- 수량 선택 및 액션 -->
        <div class="border-t border-gray-200 p-4">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-gray-900">수량</span>
            <div class="flex items-center">
              <button
                id="quantity-decrease"
                class="w-8 h-8 flex items-center justify-center border border-gray-300 
                   rounded-l-md bg-gray-50 hover:bg-gray-100"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                </svg>
              </button>
              <input
                type="number"
                id="quantity-input"
                value="1"
                min="1"
                max="107"
                class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
                  focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                id="quantity-increase"
                class="w-8 h-8 flex items-center justify-center border border-gray-300 
                   rounded-r-md bg-gray-50 hover:bg-gray-100"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </button>
            </div>
          </div>
          <!-- 액션 버튼 -->
          <button
            id="add-to-cart-btn"
            data-product-id="85067212996"
            class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
                 hover:bg-blue-700 transition-colors font-medium"
          >
            장바구니 담기
          </button>
        </div>
      </div>
      <div class="mb-6">
        <button
          class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
            hover:bg-gray-200 transition-colors go-to-product-list"
        >
          상품 목록으로 돌아가기
        </button>
      </div>
      <!-- 관련 상품 -->
      <div class="bg-white rounded-lg shadow-sm">
        <div class="p-4" id="related-products-container"></div>
      </div>
    `,ve=e=>{let t=Array.from({length:5},(t,n)=>{let r=n<e?`text-yellow-400`:`text-gray-300`;return`
      <svg class="w-4 h-4 ${r}" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        ></path>
      </svg>
    `});return t.join(``)},ye=async e=>{try{let t=await _e(e.category1,e.category2),n=t.products.filter(t=>t.productId!==e.productId),r=document.querySelector(`#related-products-container`);r&&n.length>0&&(r.innerHTML=`
        <div class="p-4 border-b border-gray-200">
          <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
          <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
        </div>
        <div class="grid grid-cols-2 gap-3 responsive-grid">
          ${n.map(e=>`
                <div
                  class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer"
                  data-product-id="${e.productId}"
                >
                  <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                    <img
                      src="${e.image}"
                      alt="${e.title}"
                      class="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
                  <p class="text-sm font-bold text-blue-600">${parseInt(e.lprice).toLocaleString(`ko-KR`)}원</p>
                </div>
              `).join(``)}
        </div>
      `,be())}catch(e){console.error(e)}},be=()=>{let e=$(),t=document.querySelectorAll(`.related-product-card`);t.forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.productId;e.navigate(`/product/${n}`)})})},xe=e=>{let t=document.querySelector(`main`);t&&(t.innerHTML=`
      <main class="max-w-md mx-auto px-4 py-4">${Se(e)}${Z(e,[])}</main>
    `,ye(e))},Se=e=>`
    <nav class="mb-4">
      <div class="flex items-center space-x-2 text-sm text-gray-600">
        <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <button class="breadcrumb-link" data-category1="${e.category1}">${e.category1}</button>
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <button class="breadcrumb-link" data-category2="${e.category2}">${e.category2}</button>
      </div>
    </nav>
  `;function Ce(){let e=$(),t=()=>{let e=document.getElementById(`toast-container`);e||(e=document.createElement(`div`),e.id=`toast-container`,e.className=`fixed top-4 right-4 z-50`,document.body.appendChild(e));let t=he();e.innerHTML=t;let n=document.getElementById(`toast-close-btn`);n&&n.addEventListener(`click`,()=>{e.innerHTML=``}),setTimeout(()=>{e&&(e.innerHTML=``)},3e3)},n=()=>{let n=document.querySelector(`.go-to-product-list`);n&&n.addEventListener(`click`,()=>{e.navigate(`/`)});let r=document.getElementById(`add-to-cart-btn`);r&&r.addEventListener(`click`,()=>{t()});let i=document.querySelector(`#quantity-input`),a=document.querySelector(`#quantity-decrease`),o=document.querySelector(`#quantity-increase`);a&&i&&a.addEventListener(`click`,()=>{let e=parseInt(i.value);e>1&&(i.value=e-1)}),o&&i&&o.addEventListener(`click`,()=>{let e=parseInt(i.value),t=parseInt(i.max);e<t&&(i.value=e+1)})},r=async(e={})=>{let{id:t}=e;Y=await ge(t),xe(Y),n()},i=()=>`
      <div class="min-h-screen bg-gray-50">
        ${A(`상품 상세`)}
        <main class="max-w-md mx-auto px-4 py-4">${Z(null)}</main>
        ${P()}
      </div>
    `,a=()=>{Y=null};return{setup:r,cleanup:a,setupEvent:n,render:i}}var we=Ce;const Te=()=>({render(){return`
         <main class="max-w-md mx-auto px-4 py-4">
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
          </linearGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
          </filter>
        </defs>
        
        <!-- 404 Numbers -->
        <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
        
        <!-- Icon decoration -->
        <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        
        <!-- Message -->
        <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
        
        <!-- Subtle bottom accent -->
        <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
      </svg>
      
      <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
    </div>
    </main>
        `},setup(){var e;(e=document.querySelector(`a[href="/"]`))?.addEventListener(`click`,e=>{e.preventDefault(),window.dispatchEvent(new CustomEvent(`navigate`,{detail:`/`}))})}});var Ee=Te;const Q=`/front_6th_chapter1-1`,$=()=>{let e={"/":pe,"/product/:id":we,"/404":Ee()};function t(t,n){e[t]=n}let n=e=>RegExp(`^`+e.replace(/\//g,`\\/`).replace(/:\w+/g,`(.+)`)+`$`),r=t=>{if(e[t])return{component:e[t],params:{}};for(let[i,a]of Object.entries(e))if(i.includes(`:`)){let e=n(i),o=t.match(e);if(o){var r;let e=(r=i.match(/:\w+/g))?.map(e=>e.slice(1))||[],t={};return e.forEach((e,n)=>{t[e]=o[n+1]}),{component:a,params:t}}}return{component:e[`/404`],params:{}}},i=e=>Q&&e.startsWith(Q)?e.slice(Q.length)||`/`:e,a=e=>Q+e;function o(e){let{component:t,params:n}=r(e),i;i=typeof t==`function`&&!t.render?t():t;let a=document.getElementById(`root`);a&&(a.innerHTML=i.render(n),i.setup&&i.setup(n))}function s(e){let t=new URL(window.location),n=t.search,r=a(e)+n;window.history.pushState({},``,r),o(e)}function c(){window.addEventListener(`popstate`,()=>{let e=i(window.location.pathname);o(e)});let e=()=>{let e=document.getElementById(`root`);if(e&&e.children.length===0){let e=i(window.location.pathname);o(e)}},t=i(window.location.pathname);o(t)}return{addRoute:t,init:c,navigate:s}},De=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-CRjX2EoE.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));function Oe(){let e=$();window.router=e,e.init()}De().then(Oe);