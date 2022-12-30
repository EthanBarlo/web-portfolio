<script lang="ts">
   import { page } from '$app/stores';
   import "../global.css";

   const navElements = [
      { name: "Contact", href: "/contact" },
      { name: "Projects", href: "/projects" },
      { name: "About", href: "/" },
   ];
</script>

<div class="bg-lavender-100 p-6 pl-2">
   <div class="flex flex-row items-start justify-start relative max-w-3xl mx-auto">
      <div class="w-12 h-[480px] sticky top-[calc(50%-240px)]">
         <nav class="flex w-fit -rotate-90 translate-y-[100%] -translate-x-[40.5%]">
            {#each navElements as element}
               <a href=
                  {element.href}
                   class={`relative -mr-8 w-32 ${element.href === $page.url.pathname ? "z-20 active" : "z-10"}`}
               >
               <img src={element.href === $page.url.pathname ? "/tab-bg.svg" : "/tab-bg-default.svg"} alt="" class="h-12">
                  <span class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-lg font-charm">
                     {element.name}
                  </span>
               </a>
            {/each}
         </nav>
      </div>
      <main class="border-2 border-lavender-900 rounded-lg bg-lavender-300 p-2 h-[1000px] w-full">
         <slot><!-- optional fallback --></slot>
      </main>
   </div>
</div>