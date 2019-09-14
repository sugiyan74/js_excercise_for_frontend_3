/**
 * 課題1: id属性値が `main` のdiv要素ににul要素を追加する
 */
const mainElement = document.getElementById('main');
const ulElement = document.createElement('ul');

mainElement.appendChild(ulElement);
console.log(mainElement);

/**
 * 課題2: 課題1で作成したul要素に5つのli要素(DOM)を追加する
 *   - forループを使って5つのli要素(DOM)を追加すること
 *   - li要素(DOM)には先頭から次のテキストをセットする(textContentを使うこと)
 *     1. アイテム1
 *     2. アイテム2
 *     3. アイテム3
 *     4. アイテム4
 *     5. アイテム5
 */
const countOfList = 5;
for(let i = 0; i < countOfList; i++) {
    const liElelement = document.createElement('li');
    const num = i + 1;
    liElelement.textContent = num +'. アイテム' + num;
    ulElement.appendChild(liElelement);
}

/**
 * 課題3: 課題2で作成した5つのli要素の内、先頭から4番目(アイテム4)の要素を削除する
 *   - ヒント: DOMのchildrenプロパティが使える
 *     - https://developer.mozilla.org/ja/docs/Web/API/ParentNode/children
 */
const deleteElement = ulElement.children[3];
deleteElement.parentNode.removeChild(deleteElement);

/**
 * 課題4: id属性値が `remove-all-items` のul要素内の全てのli要素を削除する
 *   - ul要素は削除しないこと
 */

const parentElement = document.getElementById('remove-all-items');
while(parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
}