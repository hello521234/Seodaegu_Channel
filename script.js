document.addEventListener('DOMContentLoaded', function() {
    const videos = {
        ine: [
            {
                thumbnail: './ine/reverse7p.webp',
                title: '리버스7p단품',
                views: 8515,
                likes: 150,
                comments: 25,
                link: 'https://www.youtube.com/watch?v=gX7mfIwu9K4'
            },
            {
                thumbnail: './ine/teibnuezone.webp', // 예시 썸네일 링크
                title: 'TEI BNUE ZONE',
                views: 49418,
                likes: 575,
                comments: 57,
                link: 'https://www.youtube.com/watch?v=OQONlVEMfyI'
            },
            {
                thumbnail: './ine/teihwamyeong.webp',
                title: 'TEI HWAMYEONG',
                views: 36306,
                likes: 507,
                comments: 40,
                link: 'https://www.youtube.com/watch?v=eYIjI3A1qHc'
            },
            {
                thumbnail: './ine/youkaisango.webp', // 예시 썸네일 링크
                title: '合作 | YOUKAI SANGO',
                views: 40042,
                likes: 547,
                comments: 37,
                link: 'https://www.youtube.com/watch?v=UCftm-dXcfQ'
            },
            {
                thumbnail: './ine/transition202321p.webp',
                title: 'Transition 2023 | 21p - Henceforth',
                views: 5900,
                likes: 110,
                comments: 22,
                link: 'https://www.youtube.com/watch?v=XH7r33fty50'
            }
        ],
        p144: [
            {
                thumbnail: './p144/centum zone.webp', // 예시 썸네일 링크
                title: '[교통합성]CeNtUm ZonE?',
                views: 2767,
                likes: 56,
                comments: 13,
                link: 'https://www.youtube.com/watch?v=Co6176oMShY'
            },
            {
                thumbnail: './p144/youkainhaeundae.webp', // 예시 썸네일 링크
                title: '미완성',
                views: 883,
                likes: 13,
                comments: 7,
                link: 'https://www.youtube.com/watch?v=9F4O817TiO4'
            },
            {
                thumbnail: './p144/183munsan.webp', // 예시 썸네일 링크
                title: '[교통합성]CeNtUm ZonE?',
                views: 1412,
                likes: 38,
                comments: 8,
                link: 'https://www.youtube.com/watch?v=XCQph5JUSh0'
            },
            {
                thumbnail: './p144/blastermipo.webp', // 예시 썸네일 링크
                title: 'Blaster Mipo Zone',
                views: 2133,
                likes: 0,
                comments: 10,
                link: 'https://www.youtube.com/watch?v=O_AtgYq22LE'
            },
            {
                thumbnail: './p144/4insinsa.webp', // 예시 썸네일 링크
                title: '4명이서 레드존神社를 하루만에 만들어보았다',
                views: 846,
                likes: 22,
                comments: 10,
                link: 'https://www.youtube.com/watch?v=CZkSfdEL-Ac'
            },
            {
                thumbnail: './p144/rekorailjinyeong.webp', // 예시 썸네일 링크
                title: 'Re:KORAIL-JINYEONG ZONE',
                views: 2814,
                likes: 41,
                comments: 7,
                link: 'https://www.youtube.com/watch?v=OohaxW7NIGs'
            },
            {
                thumbnail: './p144/sareungzone.webp', // 예시 썸네일 링크
                title: '[183?] [교통합성] SAREUNG ZONE',
                views: 2310,
                likes: 74,
                comments: 15,
                link: 'https://www.youtube.com/watch?v=C4Pp6oiEQ6o'
            },
            {
                thumbnail: './p144/jejinbujeon.webp', // 예시 썸네일 링크
                title: '제진~부전',
                views: 1081,
                likes: 36,
                comments: 11,
                link: 'https://www.youtube.com/watch?v=pTrgEhMXsWM'
            }
        ],
        mine: [
            {
                thumbnail: './mine/beatnewworld.webp', // 예시 썸네일 링크
                title: '[合作] BEAT-NEW-WORLD',
                views: 14054,
                likes: 173,
                comments: 30,
                link: 'https://www.youtube.com/watch?v=G46M4e4wapc'
            }
        ],
        krkd: [
            {
                thumbnail: './krkd/youkaigeoje.webp', // 예시 썸네일 링크
                title: 'YOUKAI GEOJE ZONE【巨堤駅】',
                views: 14881,
                likes: 185,
                comments: 28,
                link: 'https://www.youtube.com/watch?v=J_2mTy-Kh7Q'
            },
            {
                thumbnail: './krkd/secondwonjong.webp', // 예시 썸네일 링크
                title: 'SECOND WONJONG [動画版]',
                views: 3364,
                likes: 76,
                comments: 21,
                link: 'https://www.youtube.com/watch?v=b5EFBpbyT7w'
            },
            {
                thumbnail: './krkd/scrltjungang.webp', // 예시 썸네일 링크
                title: 'Scrlt Jungang Zone [動画版]',
                views: 3046,
                likes: 76,
                comments: 21,
                link: 'https://www.youtube.com/watch?v=ShArNUfcydk'
            },
            {
                thumbnail: './krkd/scarletomori.webp', // 예시 썸네일 링크
                title: 'SCARLET OMORI [動画版]',
                views: 12873,
                likes: 305,
                comments: 37,
                link: 'https://www.youtube.com/watch?v=e-aXCAlPGSc'
            }
        ]
    };

    const container = document.getElementById('video-container');
    const categoryButtons = document.querySelectorAll('.category-btn');

    // 초기에 첫 번째 카테고리 영상 리스트를 보이도록 설정
    showVideos('ine');

    // 각 카테고리 버튼에 클릭 이벤트 리스너 추가
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showVideos(category);

            // 활성화된 버튼 스타일 변경
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 영상 리스트를 화면에 표시하는 함수
    function showVideos(category) {
        container.innerHTML = ''; // 기존의 영상 리스트 초기화
    
        if (videos[category].length === 0) {
            container.innerHTML = '<p>No videos available for this category.</p>';
            return;
        }
    
        // 영상 카드들을 순차적으로 처리하기 위한 인덱스 변수
        let index = 0;
    
        function displayVideoCards() {
            if (index < videos[category].length) {
                const video = videos[category][index];
                const card = createVideoCard(video);
                container.appendChild(card);
    
                // 각 카드별 애니메이션 클래스 추가
                setTimeout(() => {
                    card.classList.add('show');
                }, index * 100); // 각 카드별 200ms 간격으로 애니메이션 적용
    
                index++;
                // 다음 카드가 있는 경우 재귀적으로 호출하여 순차적으로 처리
                setTimeout(displayVideoCards, 100); // 다음 카드는 200ms 뒤에 처리
            }
        }
    
        displayVideoCards(); // 함수 호출로 첫 번째 카드부터 시작
    }
    // 영상 카드를 생성하는 함수
    function createVideoCard(video) {
        const card = document.createElement('div');
        card.classList.add('video-card');

        const thumbnail = document.createElement('div');
        thumbnail.classList.add('video-thumbnail');
        thumbnail.style.backgroundImage = `url('${video.thumbnail}')`;
        card.appendChild(thumbnail);

        const details = document.createElement('div');
        details.classList.add('video-details');

        const title = document.createElement('a');
        title.classList.add('video-title');
        title.textContent = video.title;
        title.href = video.link;
        title.target = '_blank'; // 새 창에서 열기
        details.appendChild(title);

        const stats = document.createElement('p');
        stats.classList.add('video-stats');
        stats.textContent = `Views: ${video.views} Likes: ${video.likes} Comments: ${video.comments}`;
        details.appendChild(stats);

        card.appendChild(details);

        return card;
    }
});
