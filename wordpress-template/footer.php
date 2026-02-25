<?php
/**
 * The template for displaying the footer
 */
?>
      <footer class="bg-slate-900 text-white py-16 font-sans">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div class="text-center md:text-left">
              <div class="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div class="w-8 h-8 bg-[#006837] rounded-full flex items-center justify-center text-white font-serif font-bold">O</div>
                <span class="font-serif font-bold text-xl" style="font-family: 'Playfair Display', serif;">OTO <span class="text-[#D4AF37]">2027</span></span>
              </div>
              <p class="text-slate-400 max-w-xs">
                Asiwaju Dr. Adetunji Oredipe for Governor. <br />
                All Progressives Congress (APC) <br />
                Ogun State Transformation Project.
              </p>
            </div>
            
            <div class="flex gap-6">
              <a href="#" class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#006837] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#006837] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#006837] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
          
          <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© <?php echo date('Y'); ?> OTO Campaign Organization. All rights reserved.</p>
            <p class="font-serif italic text-lg text-white/30" style="font-family: 'Playfair Display', serif;">"Our Time, Ogun."</p>
          </div>
        </div>
      </footer>
    </div><!-- #page -->
    <?php wp_footer(); ?>
  </body>
</html>
