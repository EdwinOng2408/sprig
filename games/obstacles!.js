/*
@title: obstacles!
@author: random
Game 3 of 3

Instructions:
Obstacle course
Avoid the grey traps
Start at the start point (yellow and green), and end at exit (red and orange)

Scoring:
Trap >> -5 Points
Treasure >> 20 Points
First to end >> 25 Points
*/
const player1 = "a";
const player2 = "b";
const wall = "w";
const start = "s";
const end = "e";
const trap = "t";
const reward = "r";

const melody = tune`
30,
30: d5~30 + c5~30 + b4~30 + a4~30 + g4~30,
30: b4~30,
30: b4~30 + c5~30 + d5~30 + a4~30 + g4~30,
30,
30: d5^30 + c5^30 + b4^30 + a4^30 + g4^30,
30: d5^30 + g4^30 + b4^30,
30: d5^30 + g4^30 + b4^30,
30,
30: d5-30 + c5-30 + b4-30 + a4-30 + g4-30,
30: g4-30,
30: g4-30,
30,
30: d5/30 + c5/30 + b4/30 + a4/30 + g4/30,
30: g4/30,
30: g4/30,
30,
30: g4~30 + d5~30 + c5~30 + b4~30 + a4~30,
30: g4~30 + d5~30,
30: g4~30 + a4~30 + b4~30 + c5~30 + d5~30,
30,
30: d5^30 + c5^30 + b4^30 + a4^30 + f4^30,
30,
30: d5-30 + c5-30 + b4-30 + a4-30 + f4-30,
30,
30: d5~30 + c5~30 + b4~30 + a4~30 + f4~30,
30,
30: d5-30 + c5-30 + b4-30 + a4-30 + f4-30,
30,
30: d5/30 + c5/30 + b4/30 + a4/30 + f4/30,
30,
30: d5~30 + c5~30 + b4~30 + a4~30 + f4~30`;
let s1 = false;
let s2 = false;
let e1 = false;
let e2 = false;


setLegend
  ([ player1, bitmap`
3333333333333333
3333333333333333
3355533333355533
3355533333355533
3355533333355533
3333333333333333
3333333333333333
3333333553333333
3333333553333333
3333333333333333
3333333333333333
3355533333355533
3355533333355533
3355533333355533
3333333333333333
3333333333333333`],
  [ player2, bitmap`
6666666666666666
6555555555555556
6566666666666656
6565555555555656
6565666666665656
6565665555665656
6565656556565656
6565655665565656
6565655665565656
6565656556565656
6565665555665656
6565666666665656
6565555555555656
6566666666666656
6555555555555556
6666666666666666`],
  [ wall, bitmap`
2020202020202020
0202020202020202
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
2020202020202020
0202020202020202`],
  [ start, bitmap`
................
................
..644444444446..
..464444444464..
..446444444644..
..444644446444..
..444464464444..
..444446644444..
..444446644444..
..444464464444..
..444644446444..
..446444444644..
..464444444464..
..644444444446..
................
................`],
  [ end, bitmap`
3333333333333333
3999999999999993
3933333333333393
3939999999999393
3939333333339393
3939399999939393
3939393333939393
3939393993939393
3939393993939393
3939393333939393
3939399999939393
3939333333339393
3939999999999393
3933333333333393
3999999999999993
3333333333333333`],
  [ trap, bitmap`
................
................
................
....1LLLLLLL1...
....31111113L...
....300111003...
....10011100L...
....10011300L...
....13111111L...
....13101011L...
....131111113...
....121212121...
................
................
................
................`],
  [ reward, bitmap`
................
................
................
................
....6CCCCCC6....
..66CCCCCCCC66..
..6CCCCCCCCCC6..
.6CCCCCCCCCCCC6.
.6CCCCCCCCCCCC6.
.66666666666666.
.CCCCC60006CCCC.
.6CCCC66066CCC6.
.CCCCC66066CCCC.
.6CCCCCCCCCCCC6.
.CCCCCCCCCCCCCC.
.6CCCCCCCCCCCC6.`]
  );
const level_3 = map`
wwwwwwwwwwwwwwwwwwwwwwwwww
w............ww..........w
w....s.......aw..........w
w.......ww...bw..t.......w
w...wwwwwwwwwwwe.t.......w
w..ww.wwwwwwwwwwwwww.....w
w..ww...............w....w
w...w...............w....w
w...w...ww.t.www.wwww....w
w.....w....wwwwwwwwww....w
w................ww...t..w
w...w.............wwwt...w
w.w..w...........w.......w
w...t..............wwt...w
w...t...........w.ww.....w
w......t..........w......w
wwwwwwwwwwwwwwwwwwwwwwwwww`;

setMap(level_3);

setSolids([ player1, player2, wall ]);
setPushables({
  [player1]: [player2], [player2]: [player1]
  
});
onInput("w", () => {
  getFirst(player1).y -= 1;
});

onInput("s", () => {
  getFirst(player1).y += 1;
});

onInput("a", () => {
  getFirst(player1).x -= 1;
});

onInput("d", () => {
  getFirst(player1).x += 1;
});

onInput("i", () => {
  getFirst(player2).y -= 1;
});

onInput("k", () => {
  getFirst(player2).y += 1;
});

onInput("j", () => {
  getFirst(player2).x -= 1;
});

onInput("l", () => {
  getFirst(player2).x += 1;
});

afterInput(() => {
  const x1 = getFirst(player1).x;
  const y1 = getFirst(player1).y;
  const x2 = getFirst(player2).x;
  const y2 = getFirst(player2).y;

  
  if ("t" in getTile(x1, y1)){
    s1 -= 5;
    trap.remove();
  }
  if ("t" in getTile(x2, y2)){
    s2 -= 5;
    trap.remove();
  }
  if ("r" in getTile(x1, y1)){
    s1 += 20;
    reward.remove();
  }
  if ("r" in getTile(x2, y2)){
    s2 += 20;
    reward.remove();
  }
  if ("e" in getTile(x1, y1)){
    if (e2 == false){
      s1 += 25;
      e1 = true;
      addText("Player 1 wins!", { y: 4, color: color`3` });
      
    }
  }
    
  if ("e" in getTile(x2, y2)){
    if (e1 == false){
      s2 += 25;
      e2 = true;
      addText("Player 2 wins!", { y: 4, color: color`5` });
    }
  }
});