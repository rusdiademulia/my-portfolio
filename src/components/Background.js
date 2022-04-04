function Background() {
  return (
    <div className="absolute z-0 w-screen h-screen bg-gradient-to-tl from-[#CECECE] to-[#F2F2F2] overflow-hidden">
      <div class="absolute -left-[4vw] top-0 w-[18vw] h-[18vw] border-4 border-white border-solid drop-shadow-md animate-wiggle-1"></div>
      <div class="absolute left-[28vw] -bottom-[4vw] w-[10vw] h-[10vw] border-4 border-white border-solid drop-shadow-md animate-wiggle-2"></div>
      <div class="absolute -right-[3vw] top-[40vh] w-[8vw] h-[8vw] border-4 border-white border-solid drop-shadow-md animate-wiggle-3"></div>
    </div>
  );
}

export default Background;
