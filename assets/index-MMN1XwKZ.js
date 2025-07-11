(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=r(i.map(r=>{if(r=t(r,a),r in n)return;n[r]=!0;let i=r.endsWith(`.css`),o=i?`[rel="stylesheet"]`:``,c=!!a;if(c)for(let e=s.length-1;e>=0;e--){let t=s[e];if(t.href===r&&(!i||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=i?`stylesheet`:e,i||(u.as=`script`),u.crossOrigin=``,u.href=r,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),i)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})};async function i(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function a(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function o(){let e=await fetch(`/api/categories`);return await e.json()}function s({product:e}){return`
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
          <p class="text-xs text-gray-500 mb-2">${e.maker}</p>
          <p class="text-lg font-bold text-gray-900">${e.lprice}원</p>
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
  `}var c=s;function l({count:e=1}){let t=Array.from({length:e},(e,t)=>t);return t.map((e,t)=>`
        <div key=${t} class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
              <div class="aspect-square bg-gray-200"></div>
              <div class="p-3">
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div class="h-8 bg-gray-200 rounded"></div>
              </div>
        </div>
  `).join(``)}var u=l,d=class{constructor(){this.state={products:[],categories:{},pagination:{},filters:{},loading:!1,error:null},this.listeners=[]}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notify(){this.listeners.forEach(e=>e(this.state))}setState(e){this.state={...this.state,...e},this.notify()}setPagination(e){this.setState({pagination:e,loading:!1,error:null})}setFilters(e){this.setState({filters:e,loading:!1,error:null})}setLoading(e){this.setState({loading:e,error:null})}setProducts(e){this.setState({products:e,loading:!1,error:null})}setCategories(e){this.setState({categories:e,loading:!1,error:null})}setError(e){this.setState({error:e,loading:!1})}reset(){this.state={products:[],loading:!1,error:null},this.listeners=[]}};const f=new d;function p(e,t){let n=new URLSearchParams(window.location.search);return n.get(e)||t}function ee(){let e=()=>`
      <div data-breadcrumb-container class="flex items-center gap-2">
       ${t()}
      </div>
     
    `,t=()=>{let e=p(`category1`),t=p(`category2`),n=`
    <label class="text-sm text-gray-600">카테고리:</label>
    <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
  `;return e&&(n+=`
         <span class="text-xs text-gray-500">&gt;</span>
        <button data-breadcrumb="category1" data-category1="${e}" class="text-xs hover:text-blue-800 hover:underline">${e}</button>
        `,t&&(n+=`
            <span class="text-xs text-gray-500">&gt;</span>
            <span class="text-xs text-gray-600 cursor-default">${t}</span>
          `)),n},n=()=>{let e=document.querySelector(`[data-breadcrumb-container]`);e&&(e.innerHTML=t())};return{render:e,update:n}}var m=ee;let h=null;function te(){let e=()=>`
      <div class="space-y-2">
        ${m().render()}
        <div class="flex flex-wrap gap-2" data-category-container>${g()}</div>
      </div>
    `,t=e=>{let{category1:t,category2:n}=e.dataset,i=new URL(window.location.href);n?(i.searchParams.set(`category1`,t),i.searchParams.set(`category2`,n),window.history.pushState({},``,i)):t&&(i.searchParams.set(`category1`,t),i.searchParams.delete(`category2`),window.history.pushState({},``,i)),r(),window.dispatchEvent(new CustomEvent(`loadList`))},n=()=>{let e=new URL(window.location.href);e.searchParams.delete(`category1`),e.searchParams.delete(`category2`),window.history.pushState({},``,e),r(),window.dispatchEvent(new CustomEvent(`loadList`))},r=()=>{let e=document.querySelector(`[data-category-container]`);e&&(e.innerHTML=g()),m().update()},i=()=>{let e=document.getElementById(`filter-container`);e&&e.addEventListener(`click`,e=>{let{category1:i,breadcrumb:a}=e.target.dataset;if(e.target.classList.contains(`category1-filter-btn`))t(e.target);else if(a===`reset`)n();else if(a===`category1`){let e=new URL(window.location.href);e.searchParams.set(`category1`,i),e.searchParams.delete(`category2`),window.history.pushState({},``,e),r()}})};return h=f.subscribe(()=>{r()}),{render:e,setup:i,update:r,reset:n}}function g(){let{categories:e}=f.state,t=p(`category1`);if(!e||Object.keys(e).length===0)return`
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
    `}}function _(){h&&(h(),h=null)}var v=te;let y=null;function ne(){let e=re();return y=f.subscribe(b),e}function re(){return`
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
        ${v().render()}
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
  `}function b(e){console.log(`SearchBox UI 업데이트:`,e)}function x(){y&&(y(),y=null),_()}function S(){v().setup();let e=new URL(window.location.href),t=new URLSearchParams(e.search),n=t.get(`limit`),r=t.get(`sort`);if(n){let e=document.querySelector(`#limit-select`);e&&(e.value=n)}if(r){let e=document.querySelector(`#sort-select`);e&&(e.value=r)}let i=document.getElementById(`filter-container`);i&&(i.addEventListener(`change`,e=>{let{id:t,value:n}=e.target;if(t===`limit-select`){let e=n,t=new URL(window.location.href);t.searchParams.set(`limit`,e),t.searchParams.set(`current`,1),window.history.pushState({},``,t),window.dispatchEvent(new CustomEvent(`loadList`))}if(t===`sort-select`){let e=n,t=new URL(window.location.href);t.searchParams.set(`sort`,e),window.history.pushState({},``,t),window.dispatchEvent(new CustomEvent(`loadList`))}}),i.addEventListener(`keydown`,e=>{let{id:t,value:n}=e.target;if(t===`search-input`&&e.key===`Enter`){let e=n,t=new URL(window.location.href);t.searchParams.set(`search`,e),window.history.pushState({},``,t),window.dispatchEvent(new CustomEvent(`loadList`))}}))}var C=ne;function w(e=`쇼핑몰`){return`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold text-gray-900">
            <a href="/" data-link="">${e}</a>
          </h1>
          <div class="flex items-center space-x-2">
            <!-- 장바구니 아이콘 -->
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
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
  `}function T(){return`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `}var E=T;let D=1,O=!1,k=!0,A=null;function j(){let e=new URLSearchParams(window.location.search),t={limit:e.get(`limit`)||`20`,sort:e.get(`sort`)||`price_asc`,search:e.get(`search`)||``,category1:e.get(`category1`)||``,category2:e.get(`category2`)||``};return Object.keys(t).forEach(e=>{t[e]===``&&delete t[e]}),t}async function M(){if(O||!k)return;let e=document.getElementById(`loading-text`);try{O=!0,D++;let t=j(),n=await i({page:D,...t});if(!n.products||n.products.length===0){k=!1,e&&(e.textContent=`모든 상품을 확인했습니다.`);return}let r=f.state.products,a=n.products,o=[...r,...a];f.setProducts(o)}catch(t){console.error(`무한스크롤 에러:`,t),k=!1,e&&(e.textContent=`상품을 불러오는데 실패했습니다.`)}finally{O=!1}}function N(){if(O||!k)return;let e=window.pageYOffset||document.documentElement.scrollTop,t=window.innerHeight,n=document.documentElement.scrollHeight,r=100;if(e+t>=n-r){let e=document.getElementById(`loading-text`);e&&(e.textContent=`상품을 불러오는 중...`),M()}}function P(){let e=!1;return()=>{e||(window.requestAnimationFrame(()=>{N(),e=!1}),e=!0)}}function F(){A&&window.removeEventListener(`scroll`,A),A=P(),window.addEventListener(`scroll`,A)}function I(){D=1,k=!0,O=!1;let e=document.getElementById(`loading-text`);e&&(e.textContent=`스크롤하여 더 많은 상품 보기`)}function L(){A&&(window.removeEventListener(`scroll`,A),A=null),D=1,k=!0,O=!1}const R=f;let z=!1;const B=async()=>{let e=new Promise((e,t)=>setTimeout(()=>t(Error(`카테고리 로딩 타임아웃`)),5e3)),t=o();return Promise.race([t,e])},V=async()=>{let e={limit:p(`limit`,`20`),sort:p(`sort`,`price_asc`),page:p(`current`,`1`),search:p(`search`,``),category1:p(`category1`,``),category2:p(`category2`,``)};Object.keys(e).forEach(t=>{e[t]===``&&delete e[t]});let t=new Promise((e,t)=>setTimeout(()=>t(Error(`상품 로딩 타임아웃`)),5e3)),n=i(e),r=await Promise.race([n,t]);return r.products},H=async()=>{if(z){console.log(`⏸️ 이미 로딩 중이므로 중복 실행 방지`);return}try{console.log(`🚀 loadInitialData 시작`),z=!0,W();let e=typeof window<`u`&&window.location.hostname===`localhost`;if(e)console.log(`🧪 테스트 환경 - 카테고리 로딩 건너뛰기`);else try{console.log(`📂 카테고리 로딩 시작`);let e=await B();console.log(`📂 카테고리 로딩 완료:`,e),R.setCategories(e)}catch(e){console.warn(`⚠️ 카테고리 로딩 실패:`,e)}console.log(`🛒 상품 로딩 시작`);let t=await V();console.log(`🛒 상품 로딩 완료:`,t?.length,`개`),R.setProducts(t),W(),console.log(`✅ loadInitialData 완료`)}catch(e){console.error(`❌ loadInitialData 에러:`,e),R.setError(e.message)}finally{console.log(`🔄 로딩 상태 false로 변경`),z=!1,W()}},U=async()=>{if(z){console.log(`⏸️ 이미 로딩 중이므로 중복 실행 방지`);return}try{z=!0,W();let e=await V();R.setProducts(e),W(),I()}catch(e){console.error(`❌ 에러:`,e),R.setError(e.message)}finally{z=!1,W()}},W=()=>{var e;let{state:t}=R;console.log(`🔄 updateUI 호출됨 - loading:`,z,`products:`,(e=t.products)?.length,`error:`,t.error);let n=document.getElementById(`products-grid`),r=document.getElementById(`loading-text`);if(!n||!r){console.log(`⏳ DOM 요소가 아직 준비되지 않음, 100ms 후 재시도`),setTimeout(()=>W(),100);return}if(z){console.log(`🔄 로딩 중 - 스켈레톤 표시`),n.innerHTML=u({count:10}),r.textContent=`상품을 불러오는 중...`;let e=document.getElementById(`product-count`);e&&e.remove()}else{console.log(`✅ 로딩 완료 - 상품 카드 표시`);let e=Array.isArray(t.products)?t.products:[],i=e.map(e=>c({product:e})).join(``);n.innerHTML=i,r.textContent=`모든 상품을 확인했습니다`;let a=document.getElementById(`product-count`);a||(a=document.createElement(`div`),a.id=`product-count`,a.className=`mb-4 text-sm text-gray-600`,n.parentNode.insertBefore(a,n)),a.innerHTML=`총 <span class="font-medium text-gray-900">${e.length}개</span>의 상품`}},G=()=>{let e=document.getElementById(`products-grid`);e&&e.addEventListener(`click`,e=>{let t=e.target.closest(`.product-card`);if(t){let e=t.dataset.productId;window.router.navigate(`/product/${e}`)}}),window.addEventListener(`loadList`,()=>{U()})};function K(){let e=async()=>{try{W(),S(),await H(),G(),setTimeout(()=>{F()},100)}catch(e){console.error(`Home 초기화 실패:`,e),R.setError(e.message)}},t=()=>`
      <div class="min-h-screen bg-gray-50">
        ${w()}
        <main class="max-w-md mx-auto px-4 py-4">
          ${C()}

          <div class="mb-6">
            <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid"></div>
            <div class="text-center py-4 text-sm text-gray-500" id="loading-text"></div>
          </div>
        </main>
        ${E()}
      </div>
    `,n=()=>{x(),L(),window.removeEventListener(`loadList`,U),z=!1};return{setup:e,cleanup:n,render:t}}var q=K;let J=null,Y=!1;const ie=async e=>{try{Y=!0;let t=await a(e);return Y=!1,t}catch(e){Y=!1,console.error(e)}},ae=e=>{let t=Array.from({length:5},(t,n)=>{let r=n<e?`text-yellow-400`:`text-gray-300`;return`
      <svg class="w-4 h-4 ${r}" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        ></path>
      </svg>
    `});return t.join(``)},oe=e=>{let t=document.querySelector(`main`);t&&(t.innerHTML=`
      <main class="max-w-md mx-auto px-4 py-4">${se(e)}${X(e)}</main>
    `)},X=e=>Y||!e?`
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
              <div class="flex items-center">${ae(e.rating)}</div>
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
        <div class="p-4 border-b border-gray-200">
          <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
          <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
        </div>
        <div class="p-4">
          <div class="grid grid-cols-2 gap-3 responsive-grid">
            <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="86940857379">
              <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                <img
                  src="https://shopping-phinf.pstatic.net/main_8694085/86940857379.1.jpg"
                  alt="샷시 풍지판 창문 바람막이 베란다 문 틈막이 창틀 벌레 차단 샤시 방충망 틈새막이"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                샷시 풍지판 창문 바람막이 베란다 문 틈막이 창틀 벌레 차단 샤시 방충망 틈새막이
              </h3>
              <p class="text-sm font-bold text-blue-600">230원</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="82094468339">
              <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                <img
                  src="https://shopping-phinf.pstatic.net/main_8209446/82094468339.4.jpg"
                  alt="실리카겔 50g 습기제거제 제품 /산업 신발 의류 방습제"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                실리카겔 50g 습기제거제 제품 /산업 신발 의류 방습제
              </h3>
              <p class="text-sm font-bold text-blue-600">280원</p>
            </div>
          </div>
        </div>
      </div>
    `,se=e=>(console.log(e),`
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
  `);function ce(){let e=$(),t=()=>{let t=document.querySelector(`.go-to-product-list`);t&&t.addEventListener(`click`,()=>{e.navigate(`/`)})},n=async(e={})=>{let{id:n}=e;J=await ie(n),oe(J),t()},r=()=>`
      <div class="min-h-screen bg-gray-50">
        ${w(`상품 상세`)}
        <main class="max-w-md mx-auto px-4 py-4">${X(null)}</main>
        ${E()}
      </div>
    `,i=()=>{J=null};return{setup:n,cleanup:i,setupEvent:t,render:r}}var Z=ce;const Q=`/front_6th_chapter1-1`,$=()=>{let e={"/":q,"/product/:id":Z};function t(t,n){e[t]=n}let n=e=>RegExp(`^`+e.replace(/\//g,`\\/`).replace(/:\w+/g,`(.+)`)+`$`),r=t=>{if(e[t])return{component:e[t],params:{}};for(let[i,a]of Object.entries(e))if(i.includes(`:`)){let e=n(i),o=t.match(e);if(o){var r;let e=(r=i.match(/:\w+/g))?.map(e=>e.slice(1))||[],t={};return e.forEach((e,n)=>{t[e]=o[n+1]}),console.log(t,a),{component:a,params:t}}}return{component:e[`/`],params:{}}},i=e=>Q&&e.startsWith(Q)?e.slice(Q.length)||`/`:e,a=e=>Q+e;function o(e){let t=a(e);window.history.pushState({},``,t);let{component:n,params:i}=r(e),o;o=typeof n==`function`&&!n.render?n():n,document.getElementById(`root`).innerHTML=o.render(i),o.setup&&o.setup(i)}function s(){window.addEventListener(`popstate`,()=>{let e=i(window.location.pathname);o(e)});let e=i(window.location.pathname);o(e)}return{addRoute:t,init:s,navigate:o}},le=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-Dsuhr2zZ.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));function ue(){let e=$();window.router=e,e.init()}le().then(ue);