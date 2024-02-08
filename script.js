document.addEventListener('DOMContentLoaded', function () {
    // Finnur og meðhöndlar smelli á alla takka
    document.querySelectorAll('.dropbtn').forEach(function(dropBtn) {
        dropBtn.addEventListener('click', function() {
            // Næsta element (dropdown-efnið) við núverandi takka
            var dropdownContent = this.nextElementSibling;
            // Skiptir á milli að sýna og fela dropdown-efnið
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Finnur og meðhöndlar smelli á alla undirtakka
    document.querySelectorAll('.sub-dropbtn').forEach(function(subDropBtn) {
        subDropBtn.addEventListener('click', function(event) {
            // Stöðvar útbreiðslu smella atburðar til að koma í veg fyrir að yfir-takki hvarfi
            event.stopPropagation();
            // Næsta element (sub-dropdown-efnið) við núverandi undirtakka
            var subDropdownContent = this.nextElementSibling;
            // Skiptir á milli að sýna og fela sub-dropdown-efnið
            subDropdownContent.style.display = subDropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    });
});
document.querySelectorAll('.sublist-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        var sublist = this.nextElementSibling;
        if (sublist.style.display === "none") {
            sublist.style.display = "block";
            this.textContent = "-";
        } else {
            sublist.style.display = "none";
            this.textContent = "+";
        }
    });
});
