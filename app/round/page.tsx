import { Game } from "./_components/Game";

export default function Page() {


  const derbyGames = [
    {
      homeTeam: {
        name: "Bears",
        primaryColor: "#C83803",
        secondaryColor: "#0B162A",
        image: "https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI"
      },
      awayTeam: {
        name: "Packers",
        primaryColor: "#203731",
        secondaryColor: "#FFB612",
        image: "https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB"
      }
    },
    {
      homeTeam: {
        name: "Cowboys",
        primaryColor: "#041E42",
        secondaryColor: "#869397",
        image: "https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL"
      },
      awayTeam: {
        name: "Eagles",
        primaryColor: "#004C54",
        secondaryColor: "#A5ACAF",
        image: "https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI"
      }
    },
    {
      homeTeam: {
        name: "Chiefs",
        primaryColor: "#E31837",
        secondaryColor: "#FFB81C",
        image: "https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC"
      },
      awayTeam: {
        name: "Bills",
        primaryColor: "#00338D",
        secondaryColor: "#C60C30",
        image: "https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF"
      }
    },
    {
      homeTeam: {
        name: "49ers",
        primaryColor: "#AA0000",
        secondaryColor: "#B3995D",
        image: "https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF"
      },
      awayTeam: {
        name: "Seahawks",
        primaryColor: "#002244",
        secondaryColor: "#69BE28",
        image: "https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA"
      }
    },
    {
      homeTeam: {
        name: "Buccaneers",
        primaryColor: "#D50A0A",
        secondaryColor: "#FF7900",
        image: "https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB"
      },
      awayTeam: {
        name: "Saints",
        primaryColor: "#D3BC8D",
        secondaryColor: "#101820",
        image: "https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO"
      }
    },
    {
      homeTeam: {
        name: "Ravens",
        primaryColor: "#241773",
        secondaryColor: "#9E7C0C",
        image: "https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL"
      },
      awayTeam: {
        name: "Bengals",
        primaryColor: "#FB4F14",
        secondaryColor: "#000000",
        image: "https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN"
      }
    },
    {
      homeTeam: {
        name: "Patriots",
        primaryColor: "#002244",
        secondaryColor: "#C60C30",
        image: "https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NE"
      },
      awayTeam: {
        name: "Jets",
        primaryColor: "#125740",
        secondaryColor: "#000000",
        image: "https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ"
      }
    },
    {
      homeTeam: {
        name: "Chargers",
        primaryColor: "#0080C6",
        secondaryColor: "#FFC20E",
        image: "https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC"
      },
      awayTeam: {
        name: "Raiders",
        primaryColor: "#A5ACAF",
        secondaryColor: "#000000",
        image: "https://static.www.nfl.com/q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV"
      }
    }
  ];


  return (
    <main className="flex min-h-screen flex-col p-6">
      CLICK THE TEAMS TO PREDICT THE WINNER

      <div className="flex flex-col gap-3">
        {derbyGames.map((game, index) => (
          <Game key={index} homeTeam={game.homeTeam} awayTeam={game.awayTeam} />
        ))}
      </div>
    </main>
  );
}
