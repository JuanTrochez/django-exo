/****************************************************
 * Exercise 1: Collision entre cercle et bordure.   *
 *                                                  *
 * Les dimensions de la fenêtre courrante sont      *
 * accessibles via les attributs suivantes.         *
 *   - main_window.width                            *
 *   - main_window.height                           *
 *                                                  *
 * Les attributs d'un objet circle:Cercle sont:     *
 *   - circle.x                                     *
 *   - circle.y                                     *
 *   - circle.radius                                *
 ****************************************************/

//collisionLeftBorder: Cercle --> boolean
//  revoie true ssi le cercle intersecte la bordure
//  gauche de la fenêtre courrante
function collisionLeftBorder(circle){
  /*******************
   * PARTIE A ECRIRE */
  return (circle.x - circle.radius)<= 0;
  /*******************/
}

//collisionRightBorder: Cercle --> boolean
function collisionRightBorder(circle){
  /*******************
   * PARTIE A ECRIRE */
  return (circle.x + circle.radius) >= main_window.width;
  /*******************/
}

//collisionTopBorder: Cercle --> boolean
function collisionTopBorder(circle){
  /*******************
   * PARTIE A ECRIRE */
  return (circle.y - circle.radius) <= 0;
  /*******************/
}

//collisionBottomBorder: Cercle --> boolean
function collisionBottomBorder(circle){
  /*******************
   * PARTIE A ECRIRE */
  return (circle.y + circle.radius) >= main_window.height;
  /*******************/
}

/******************************************************
 * Exercise 2: Collision entre cercles                *
 *                                                    *
 * Les attributs d'un objet circle:Cercle sont:       *
 *   - circle.x                                       *
 *   - circle.y                                       *
 *   - circle.radius                                  *
 *                                                    *
 * On peut utiliser les fonctions suivantes           *
 * (mais ce n'est pas recommende):                    *
 *   - Math.pow(x,y) renvoie x eleve a la puissance y.*
 *   - Math.sqrt(x) renvoie la racine carrée de x.   *
 ******************************************************/

//collisionCircles: Cercle * Cercle --> boolean
//  revoie true ssi les deux cercles s'intersectent
function collisionCircles(c1,c2){
  /*******************
   * PARTIE A ECRIRE */
	var bReturn = false;
	var dx = c1.x - c2.x;
	var dy = c1.y - c2.y;
	var distance = Math.sqrt(dx * dx + dy * dy);
  return distance < c1.radius + c2.radius;
  /*******************/
}

/****************************************************
 * Exercise 3: Collision cercle - rectangle         *
 *                                                  *
 * Les attributs d'un objet circle:Cercle sont:     *
 *   - circle.x                                     *
 *   - circle.y                                     *
 *   - circle.radius                                *
 *                                                  *
 * Les attributs d'un objet box:Rectangle sont      *
 *   - box.x                                        *
 *   - box.y                                        *
 *   - box.width                                    *
 *   - box.height                                   *
 * Le quatres coins du rectangle sont définis par   *
 *   - (box.x, box.y)                               *
 *   - (box.x+box.width, box.y)                     *
 *   - (box.x, box.y+box.height)                    *
 *   - (box.x+box.width, box.y+box.height)          *
 ****************************************************/

//collisionCircleBox: Cercle * Rectangle --> boolean
//  revoie true ssi les deux objets s'intersectent
function collisionCircleBox(circle,box){
  /*******************
   * PARTIE A ECRIRE */
	var distX = Math.abs(circle.x - box.x-box.width/2);
    var distY = Math.abs(circle.y - box.y-box.height/2);

    if (distX > (box.width/2 + circle.radius)) { return false; }
    if (distY > (box.height/2 + circle.radius)) { return false; }

    if (distX <= (box.width/2)) { return true; }
    if (distY <= (box.height/2)) { return true; }

    var dx=distX-box.width/2;
    var dy=distY-box.height/2;
    return (dx*dx+dy*dy<=(circle.radius*circle.radius));
  return false;
  /*******************/
}
