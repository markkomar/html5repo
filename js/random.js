var Quotation=new Array()

Quotation[0] = "\"It's not a faith in technology. It's faith in people. - Steve Jobs\"";
Quotation[1] = "\"Things don't have to change the world to be important. - Steve Jobs\"";
Quotation[2] = "\"The people who are crazy enough to think they can change the world are the ones who do. - Steve Jobs\"";
Quotation[3] = "\"I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison\"";
Quotation[4] = "\"Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi\"";
Quotation[5] = "\"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success - Dale Carnegie\"";
Quotation[6] = "\"First, solve the problem. Then, write the code. - John Johnson\"";
Quotation[7] = "\"Programs must be written for people to read, and only incidentally for machines to execute. - Abelson / Sussman\"";
Quotation[8] = "\"Good programmers use their brains, but good guidelines save us having to think out every case - Francis Glassborow	\"";
Quotation[9] = "\"If debugging is the process of removing software bugs, then programming must be the process of putting them in. - Edsger Dijkstra\"";

var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));
function showQuotation(){document.write(Quotation[whichQuotation]);}

