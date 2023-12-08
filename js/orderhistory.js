    const order = localStorage.getItem('orderhistory');
            const abc = JSON.parse(order);
            console.log(order);
            console.log(abc);

            abc.forEach(item =>{
                let row = `<tr>
                <th><img src="${item[0].img}" width="100px" height="100px"></th>
                <th>${item[0].title}</th>
                <th>23</th>
              `;
                document.getElementById('ordertable').insertAdjacentHTML('beforeend',row);
            })