

    $( ".bitcoin" )
    .keyup(function() {
        let value = $( this ).val();
        $( ".bitcoinText" ).text( value );

    })
    $( ".dollar" )
        .keyup(function() {
            let value = $( this ).val();
            $( ".dollarText" ).text( value );
        })
    $( "#btnResult" ).on("click", function() {
        const bitcoinPrice = $(".bitcoin").val();
        const dollarAmount = $(".dollar").val();

        sum = (dollarAmount / bitcoinPrice);

        sum = Math.round(sum * 1000000);
        sum = sum / 1000000;

        $( ".resultText" ).val('You can buy ' + sum + ' BTC' );
    });

