import { Link } from "react-router-dom";
import Cookies from "js-cookies";
import "./index.css";

const Header = () => {
  function handleLogout() {
    Cookies.removeItem("jwtToken");

    window.location.href = "/login";
  }

  return (
    <>
      <nav>
        <ul className="my-nav">
          <div className="logo-div">
            <li>
              <Link to="/">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTUuNTIgNzEuNjMwMzc5MzU0NzU1NzciIGhlaWdodD0iNzEuNjMwMzc5MzU0NzU1NzciIHdpZHRoPSIzOTUuNTIiPjxnPjxzdmcgdmlld0JveD0iMCAwIDQ5OS4zNDEzODk2MzM0NzUxNiA5MC40MzI4ODExODY3MzMyNyIgaGVpZ2h0PSI3MS42MzAzNzkzNTQ3NTU3NyIgd2lkdGg9IjM5NS41MiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwxMDMuODIxMzg5NjMzNDc1MTksMTIuNDk4MzIxNDk1NDE2ODMyKSI+PHN2ZyB2aWV3Qm94PSIwIDAgMzk1LjUyIDY1LjQzNjIzODE5NTg5OTYiIGhlaWdodD0iNjUuNDM2MjM4MTk1ODk5NiIgd2lkdGg9IjM5NS41MiI+PGcgaWQ9InRleHRibG9ja3RyYW5zZm9ybSI+PHN2ZyB2aWV3Qm94PSIwIDAgMzk1LjUyIDY1LjQzNjIzODE5NTg5OTYiIGhlaWdodD0iNjUuNDM2MjM4MTk1ODk5NiIgd2lkdGg9IjM5NS41MiIgaWQ9InRleHRibG9jayI+PGc+PHN2ZyB2aWV3Qm94PSIwIDAgMzk1LjUyIDY1LjQzNjIzODE5NTg5OTYiIGhlaWdodD0iNjUuNDM2MjM4MTk1ODk5NiIgd2lkdGg9IjM5NS41MiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwwLDApIj48c3ZnIHdpZHRoPSIzOTUuNTIiIHZpZXdCb3g9Ii0wLjAyMDAwMDAwMDAwMDAwMDAxOCAtNDMuNSAzMTguMzQ5OTk5OTk5OTk5OTcgNTMuNTEiIGhlaWdodD0iNjUuNDM2MjM4MTk1ODk5NiIgZGF0YS1wYWxldHRlLWNvbG9yPSIjMjQyN2Q5Ij48cGF0aCBkPSJNMTMuNjctMTUuMzNMMTMuNjcgMCAzLjk4IDAgMy45OC0zNS4xNiAxMy42Ny0zNS4xNiAxMy42Ny0xOS44IDI2LjUxLTE5LjggMjYuNTEtMzUuMTYgMzYuMjEtMzUuMTYgMzYuMjEgMCAyNi41MSAwIDI2LjUxLTE1LjMzIDEzLjY3LTE1LjMzWk01Mi0zNS4wMUw1Mi0zNS4wMVE1Mi0zNC4wOCA1MS42NS0zMy4yNSA1MS4yOS0zMi40MiA1MC42OC0zMS44MSA1MC4wNy0zMS4yIDQ5LjI0LTMwLjg1IDQ4LjQxLTMwLjQ5IDQ3LjQ4LTMwLjQ5TDQ3LjQ4LTMwLjQ5UTQ2LjU2LTMwLjQ5IDQ1Ljc0LTMwLjg1IDQ0LjkyLTMxLjIgNDQuMzEtMzEuODEgNDMuNy0zMi40MiA0My4zNC0zMy4yNSA0Mi45OS0zNC4wOCA0Mi45OS0zNS4wMUw0Mi45OS0zNS4wMVE0Mi45OS0zNS45NCA0My4zNC0zNi43NiA0My43LTM3LjU3IDQ0LjMxLTM4LjE4IDQ0LjkyLTM4Ljc5IDQ1Ljc0LTM5LjE1IDQ2LjU2LTM5LjUgNDcuNDgtMzkuNUw0Ny40OC0zOS41UTQ4LjQxLTM5LjUgNDkuMjQtMzkuMTUgNTAuMDctMzguNzkgNTAuNjgtMzguMTggNTEuMjktMzcuNTcgNTEuNjUtMzYuNzYgNTItMzUuOTQgNTItMzUuMDFaTTUxLjYzLTI4LjE3TDUxLjYzIDAgNDMuMzYgMCA0My4zNi0yOC4xNyA1MS42My0yOC4xN1pNODIuNTEtMjUuNzFMODIuNTEtMjUuNzEgNzcuODgtMTguMDJRNzcuNTgtMTguOTkgNzcuMTItMjAuMjEgNzYuNjYtMjEuNDQgNzUuOTctMjIuNSA3NS4yOS0yMy41NiA3NC4zNC0yNC4yOCA3My4zOC0yNSA3Mi4xNC0yNUw3Mi4xNC0yNVE3MC45OS0yNSA3MC4xNS0yNC40MSA2OS4zMS0yMy44MyA2OC43Mi0yMi44OSA2OC4xMy0yMS45NSA2Ny43Ni0yMC43NiA2Ny4zOC0xOS41OCA2Ny4xNy0xOC4zNyA2Ni45Ni0xNy4xNiA2Ni44OS0xNi4wNSA2Ni44Mi0xNC45NCA2Ni44Mi0xNC4xNEw2Ni44Mi0xNC4xNCA2Ni44MiAwIDU4LjU0IDAgNTguNTQtMjguMiA2MS43MS0yOC4yIDY1LjA2LTIxLjYzUTY1Ljc0LTIzLjIyIDY2LjYyLTI0LjU1IDY3LjUtMjUuODggNjguNjUtMjYuODQgNjkuNzktMjcuODEgNzEuMjUtMjguMzQgNzIuNy0yOC44OCA3NC41My0yOC44OEw3NC41My0yOC44OFE3NS40OC0yOC44OCA3Ni42Ni0yOC43MiA3Ny44My0yOC41NiA3OC45NS0yOC4xOSA4MC4wNy0yNy44MSA4MS4wMy0yNy4yIDgxLjk4LTI2LjU5IDgyLjUxLTI1LjcxWk05Mi4wMS0xMy4zOEw5Mi4wMS0xMy4zOFE5My41Mi0xMy4wNCA5NS4wNC0xMi44NCA5Ni41NS0xMi42NSA5OC4wOS0xMi42NUw5OC4wOS0xMi42NVE5OS43LTEyLjY1IDEwMS4wOC0xMi45NSAxMDIuNDYtMTMuMjYgMTAzLjQ3LTEzLjk4IDEwNC40OC0xNC43IDEwNS4wNy0xNS44OSAxMDUuNjYtMTcuMDkgMTA1LjY2LTE4Ljg3TDEwNS42Ni0xOC44N1ExMDUuNjYtMjAuMzEgMTA1LjI3LTIxLjUxIDEwNC44OC0yMi43MSAxMDQuMTEtMjMuNTYgMTAzLjM0LTI0LjQxIDEwMi4yMS0yNC44OSAxMDEuMDktMjUuMzcgOTkuNi0yNS4zN0w5OS42LTI1LjM3UTk4LjIxLTI1LjM3IDk3LjEtMjQuODUgOTUuOTktMjQuMzQgOTUuMTUtMjMuNDcgOTQuMy0yMi42MSA5My43MS0yMS40NiA5My4xMS0yMC4zMSA5Mi43Mi0xOS4wNyA5Mi4zMy0xNy44MiA5Mi4xNi0xNi41NSA5MS45OC0xNS4yOCA5MS45OC0xNC4xNkw5MS45OC0xNC4xNlE5MS45OC0xMy45NiA5MS45OC0xMy43NyA5MS45OC0xMy41NyA5Mi4wMS0xMy4zOFpNMTEyLjM1LTE4Ljk1TDExMi4zNS0xOC45NVExMTIuMzUtMTcuMjEgMTExLjc4LTE1Ljg2IDExMS4yMi0xNC41IDExMC4yNi0xMy40OCAxMDkuMjktMTIuNDUgMTA4LjAyLTExLjc0IDEwNi43Ni0xMS4wNCAxMDUuMzEtMTAuNTggMTAzLjg3LTEwLjEzIDEwMi4zNS05Ljk0IDEwMC44Mi05Ljc0IDk5LjM4LTkuNzRMOTkuMzgtOS43NFE5Ny41NS05Ljc0IDk1Ljc3LTEwIDkzLjk5LTEwLjI1IDkyLjI1LTEwLjgyTDkyLjI1LTEwLjgyUTkyLjUyLTkuMiA5My4xMS03Ljc1IDkzLjY5LTYuMyA5NC42Ny01LjIxIDk1LjY1LTQuMTMgOTcuMDgtMy40OSA5OC41LTIuODYgMTAwLjQ2LTIuODZMMTAwLjQ2LTIuODZRMTAxLjc1LTIuODYgMTAyLjkyLTMuMjUgMTA0LjA5LTMuNjQgMTA1LjA3LTQuMzUgMTA2LjA1LTUuMDUgMTA2Ljc5LTYuMDMgMTA3LjU0LTcuMDEgMTA4LTguMkwxMDgtOC4yIDExMS41Ni02Ljg4UTExMC43Ni00Ljk2IDEwOS4zNi0zLjU1IDEwNy45NS0yLjE1IDEwNi4xOC0xLjIzIDEwNC40MS0wLjMyIDEwMi40MiAwLjEyIDEwMC40MyAwLjU2IDk4LjQ4IDAuNTZMOTguNDggMC41NlE5NS4yNiAwLjU2IDkyLjUyLTAuNTIgODkuNzktMS42MSA4Ny44MS0zLjU2IDg1LjgzLTUuNTIgODQuNzEtOC4yMyA4My41OS0xMC45NCA4My41OS0xNC4xNkw4My41OS0xNC4xNlE4My41OS0xNy4zOCA4NC43MS0yMC4wOSA4NS44My0yMi44IDg3LjgxLTI0Ljc2IDg5Ljc5LTI2LjcxIDkyLjUyLTI3LjggOTUuMjYtMjguODggOTguNDgtMjguODhMOTguNDgtMjguODhRMTAwLjA0LTI4Ljg4IDEwMS42OC0yOC42NiAxMDMuMzEtMjguNDQgMTA0Ljg1LTI3Ljk3IDEwNi4zOS0yNy40OSAxMDcuNzYtMjYuNzMgMTA5LjEyLTI1Ljk4IDExMC4xNC0yNC44NyAxMTEuMTUtMjMuNzUgMTExLjc1LTIyLjI5IDExMi4zNS0yMC44MyAxMTIuMzUtMTguOTVaTTEyNy43Mi0xNS4zM0wxMjcuNzIgMCAxMTguMDMgMCAxMTguMDMtMzUuMTYgMTI3LjcyLTM1LjE2IDEyNy43Mi0xOS44IDE0MC41Ny0xOS44IDE0MC41Ny0zNS4xNiAxNTAuMjYtMzUuMTYgMTUwLjI2IDAgMTQwLjU3IDAgMTQwLjU3LTE1LjMzIDEyNy43Mi0xNS4zM1pNMTYzLjkzLTEzLjM4TDE2My45My0xMy4zOFExNjUuNDQtMTMuMDQgMTY2Ljk2LTEyLjg0IDE2OC40Ny0xMi42NSAxNzAuMDEtMTIuNjVMMTcwLjAxLTEyLjY1UTE3MS42Mi0xMi42NSAxNzMtMTIuOTUgMTc0LjM4LTEzLjI2IDE3NS4zOS0xMy45OCAxNzYuNC0xNC43IDE3Ni45OS0xNS44OSAxNzcuNTgtMTcuMDkgMTc3LjU4LTE4Ljg3TDE3Ny41OC0xOC44N1ExNzcuNTgtMjAuMzEgMTc3LjE4LTIxLjUxIDE3Ni43OS0yMi43MSAxNzYuMDMtMjMuNTYgMTc1LjI2LTI0LjQxIDE3NC4xMy0yNC44OSAxNzMuMDEtMjUuMzcgMTcxLjUyLTI1LjM3TDE3MS41Mi0yNS4zN1ExNzAuMTMtMjUuMzcgMTY5LjAyLTI0Ljg1IDE2Ny45MS0yNC4zNCAxNjcuMDctMjMuNDcgMTY2LjIyLTIyLjYxIDE2NS42Mi0yMS40NiAxNjUuMDMtMjAuMzEgMTY0LjY0LTE5LjA3IDE2NC4yNS0xNy44MiAxNjQuMDctMTYuNTUgMTYzLjktMTUuMjggMTYzLjktMTQuMTZMMTYzLjktMTQuMTZRMTYzLjktMTMuOTYgMTYzLjktMTMuNzcgMTYzLjktMTMuNTcgMTYzLjkzLTEzLjM4Wk0xODQuMjYtMTguOTVMMTg0LjI2LTE4Ljk1UTE4NC4yNi0xNy4yMSAxODMuNy0xNS44NiAxODMuMTQtMTQuNSAxODIuMTgtMTMuNDggMTgxLjIxLTEyLjQ1IDE3OS45NC0xMS43NCAxNzguNjctMTEuMDQgMTc3LjIzLTEwLjU4IDE3NS43OS0xMC4xMyAxNzQuMjctOS45NCAxNzIuNzQtOS43NCAxNzEuMy05Ljc0TDE3MS4zLTkuNzRRMTY5LjQ3LTkuNzQgMTY3LjY5LTEwIDE2NS45MS0xMC4yNSAxNjQuMTctMTAuODJMMTY0LjE3LTEwLjgyUTE2NC40NC05LjIgMTY1LjAzLTcuNzUgMTY1LjYxLTYuMyAxNjYuNTktNS4yMSAxNjcuNTctNC4xMyAxNjguOTktMy40OSAxNzAuNDItMi44NiAxNzIuMzgtMi44NkwxNzIuMzgtMi44NlExNzMuNjctMi44NiAxNzQuODQtMy4yNSAxNzYuMDEtMy42NCAxNzYuOTktNC4zNSAxNzcuOTctNS4wNSAxNzguNzEtNi4wMyAxNzkuNDYtNy4wMSAxNzkuOTItOC4yTDE3OS45Mi04LjIgMTgzLjQ4LTYuODhRMTgyLjY4LTQuOTYgMTgxLjI3LTMuNTUgMTc5Ljg3LTIuMTUgMTc4LjEtMS4yMyAxNzYuMzMtMC4zMiAxNzQuMzQgMC4xMiAxNzIuMzUgMC41NiAxNzAuNCAwLjU2TDE3MC40IDAuNTZRMTY3LjE4IDAuNTYgMTY0LjQ0LTAuNTIgMTYxLjcxLTEuNjEgMTU5LjczLTMuNTYgMTU3Ljc1LTUuNTIgMTU2LjYzLTguMjMgMTU1LjUxLTEwLjk0IDE1NS41MS0xNC4xNkwxNTUuNTEtMTQuMTZRMTU1LjUxLTE3LjM4IDE1Ni42My0yMC4wOSAxNTcuNzUtMjIuOCAxNTkuNzMtMjQuNzYgMTYxLjcxLTI2LjcxIDE2NC40NC0yNy44IDE2Ny4xOC0yOC44OCAxNzAuNC0yOC44OEwxNzAuNC0yOC44OFExNzEuOTYtMjguODggMTczLjYtMjguNjYgMTc1LjIzLTI4LjQ0IDE3Ni43Ny0yNy45NyAxNzguMzEtMjcuNDkgMTc5LjY4LTI2LjczIDE4MS4wNC0yNS45OCAxODIuMDYtMjQuODcgMTgzLjA3LTIzLjc1IDE4My42Ny0yMi4yOSAxODQuMjYtMjAuODMgMTg0LjI2LTE4Ljk1Wk0yMTcuODEtMjguMkwyMTcuODEgMCAyMDkuNTYgMCAyMDkuNTYtMy4zN1EyMDguMDktMS4zNyAyMDYuMDMtMC40IDIwMy45NiAwLjU2IDIwMS41IDAuNTZMMjAxLjUgMC41NlExOTguMjggMC41NiAxOTUuNzQtMC41OSAxOTMuMi0xLjczIDE5MS40NC0zLjcyIDE4OS42OC01LjcxIDE4OC43NS04LjQgMTg3LjgzLTExLjA4IDE4Ny44My0xNC4xNkwxODcuODMtMTQuMTZRMTg3LjgzLTE3LjI0IDE4OC43NS0xOS45MiAxODkuNjgtMjIuNjEgMTkxLjQ0LTI0LjYgMTkzLjItMjYuNTkgMTk1Ljc0LTI3LjczIDE5OC4yOC0yOC44OCAyMDEuNS0yOC44OEwyMDEuNS0yOC44OFEyMDMuMTMtMjguODggMjA0LjYxLTI4LjM5IDIwNi4wOS0yNy45MSAyMDcuMzItMjcuMDEgMjA4LjU1LTI2LjEyIDIwOS40OS0yNC44NyAyMTAuNDMtMjMuNjEgMjEwLjk3LTIyLjA3TDIxMC45Ny0yMi4wNyAyMTQuNjMtMjguMiAyMTcuODEtMjguMlpNMjA5LjUxLTE0LjE2TDIwOS41MS0xNC4xNlEyMDkuNTEtMTUuMjYgMjA5LjQtMTYuNDggMjA5LjI5LTE3LjcgMjA5LjAyLTE4LjkgMjA4Ljc1LTIwLjA5IDIwOC4yNy0yMS4xOCAyMDcuOC0yMi4yNyAyMDcuMDUtMjMuMTEgMjA2LjMxLTIzLjk1IDIwNS4yNi0yNC40NCAyMDQuMjEtMjQuOTMgMjAyLjgyLTI0LjkzTDIwMi44Mi0yNC45M1EyMDEuNDMtMjQuOTMgMjAwLjQtMjQuNDMgMTk5LjM3LTIzLjkzIDE5OC42NC0yMy4wOCAxOTcuOTEtMjIuMjQgMTk3LjQzLTIxLjE0IDE5Ni45Ni0yMC4wNCAxOTYuNjktMTguODUgMTk2LjQyLTE3LjY1IDE5Ni4zMS0xNi40NCAxOTYuMi0xNS4yMyAxOTYuMi0xNC4xNkwxOTYuMi0xNC4xNlExOTYuMi0xMy4wOSAxOTYuMzEtMTEuODcgMTk2LjQyLTEwLjY0IDE5Ni42OS05LjQ1IDE5Ni45Ni04LjI1IDE5Ny40My03LjE1IDE5Ny45MS02LjA1IDE5OC42NC01LjIxIDE5OS4zNy00LjM3IDIwMC40LTMuODcgMjAxLjQzLTMuMzcgMjAyLjgyLTMuMzdMMjAyLjgyLTMuMzdRMjA0LjA5LTMuMzcgMjA1LjA4LTMuODkgMjA2LjA2LTQuNDIgMjA2LjgxLTUuMyAyMDcuNTUtNi4xOCAyMDguMDctNy4zIDIwOC41OC04LjQyIDIwOC45LTkuNjIgMjA5LjIxLTEwLjgyIDIwOS4zNi0xMiAyMDkuNTEtMTMuMTggMjA5LjUxLTE0LjE2Wk0yNTAuMy0yOC4yTDIzOS4xOSAwIDIzMS43NyAwIDIyMS41Mi0yOC4yIDIyOS43Ny0yOC4yIDIzNy4yOS01Ljc0IDI0NC41OS0yOC4yIDI1MC4zLTI4LjJaTTI2MC4wMS0xMy4zOEwyNjAuMDEtMTMuMzhRMjYxLjUzLTEzLjA0IDI2My4wNC0xMi44NCAyNjQuNTYtMTIuNjUgMjY2LjA5LTEyLjY1TDI2Ni4wOS0xMi42NVEyNjcuNy0xMi42NSAyNjkuMDgtMTIuOTUgMjcwLjQ2LTEzLjI2IDI3MS40OC0xMy45OCAyNzIuNDktMTQuNyAyNzMuMDgtMTUuODkgMjczLjY2LTE3LjA5IDI3My42Ni0xOC44N0wyNzMuNjYtMTguODdRMjczLjY2LTIwLjMxIDI3My4yNy0yMS41MSAyNzIuODgtMjIuNzEgMjcyLjExLTIzLjU2IDI3MS4zNC0yNC40MSAyNzAuMjItMjQuODkgMjY5LjEtMjUuMzcgMjY3LjYxLTI1LjM3TDI2Ny42MS0yNS4zN1EyNjYuMjItMjUuMzcgMjY1LjEtMjQuODUgMjYzLjk5LTI0LjM0IDI2My4xNS0yMy40NyAyNjIuMzEtMjIuNjEgMjYxLjcxLTIxLjQ2IDI2MS4xMS0yMC4zMSAyNjAuNzItMTkuMDcgMjYwLjMzLTE3LjgyIDI2MC4xNi0xNi41NSAyNTkuOTktMTUuMjggMjU5Ljk5LTE0LjE2TDI1OS45OS0xNC4xNlEyNTkuOTktMTMuOTYgMjU5Ljk5LTEzLjc3IDI1OS45OS0xMy41NyAyNjAuMDEtMTMuMzhaTTI4MC4zNS0xOC45NUwyODAuMzUtMTguOTVRMjgwLjM1LTE3LjIxIDI3OS43OS0xNS44NiAyNzkuMjMtMTQuNSAyNzguMjYtMTMuNDggMjc3LjMtMTIuNDUgMjc2LjAzLTExLjc0IDI3NC43Ni0xMS4wNCAyNzMuMzItMTAuNTggMjcxLjg4LTEwLjEzIDI3MC4zNS05Ljk0IDI2OC44My05Ljc0IDI2Ny4zOS05Ljc0TDI2Ny4zOS05Ljc0UTI2NS41Ni05Ljc0IDI2My43Ny0xMCAyNjEuOTktMTAuMjUgMjYwLjI2LTEwLjgyTDI2MC4yNi0xMC44MlEyNjAuNTMtOS4yIDI2MS4xMS03Ljc1IDI2MS43LTYuMyAyNjIuNjgtNS4yMSAyNjMuNjUtNC4xMyAyNjUuMDgtMy40OSAyNjYuNTEtMi44NiAyNjguNDYtMi44NkwyNjguNDYtMi44NlEyNjkuNzYtMi44NiAyNzAuOTMtMy4yNSAyNzIuMS0zLjY0IDI3My4wOC00LjM1IDI3NC4wNS01LjA1IDI3NC44LTYuMDMgMjc1LjU0LTcuMDEgMjc2LjAxLTguMkwyNzYuMDEtOC4yIDI3OS41Ny02Ljg4UTI3OC43Ni00Ljk2IDI3Ny4zNi0zLjU1IDI3NS45Ni0yLjE1IDI3NC4xOS0xLjIzIDI3Mi40Mi0wLjMyIDI3MC40MyAwLjEyIDI2OC40NCAwLjU2IDI2Ni40OCAwLjU2TDI2Ni40OCAwLjU2UTI2My4yNiAwLjU2IDI2MC41My0wLjUyIDI1Ny43OS0xLjYxIDI1NS44MS0zLjU2IDI1My44NC01LjUyIDI1Mi43MS04LjIzIDI1MS41OS0xMC45NCAyNTEuNTktMTQuMTZMMjUxLjU5LTE0LjE2UTI1MS41OS0xNy4zOCAyNTIuNzEtMjAuMDkgMjUzLjg0LTIyLjggMjU1LjgxLTI0Ljc2IDI1Ny43OS0yNi43MSAyNjAuNTMtMjcuOCAyNjMuMjYtMjguODggMjY2LjQ4LTI4Ljg4TDI2Ni40OC0yOC44OFEyNjguMDUtMjguODggMjY5LjY4LTI4LjY2IDI3MS4zMi0yOC40NCAyNzIuODYtMjcuOTcgMjc0LjM5LTI3LjQ5IDI3NS43Ni0yNi43MyAyNzcuMTMtMjUuOTggMjc4LjE0LTI0Ljg3IDI3OS4xNS0yMy43NSAyNzkuNzUtMjIuMjkgMjgwLjM1LTIwLjgzIDI4MC4zNS0xOC45NVpNMzE0LjMzLTE2LjE2TDMxNC4zMy0xNi4xNlEzMTQuMzMtMTMuMzEgMzEzLjY0LTEwLjIxIDMxMi45NC03LjEgMzExLjctNC4xMyAzMTAuNDUtMS4xNSAzMDguNzIgMS40OCAzMDYuOTggNC4xIDMwNC45MSA2LjAxTDMwNC45MSA2LjAxIDMwMS44MSA0LjMyUTMwMi40NyAzLjEgMzAzLjA1IDEuNTkgMzAzLjY0IDAuMDcgMzA0LjEyLTEuNjIgMzA0LjU5LTMuMzIgMzA0Ljk3LTUuMTMgMzA1LjM1LTYuOTMgMzA1LjYtOC43IDMwNS44Ni0xMC40NyAzMDYtMTIuMTUgMzA2LjEzLTEzLjgyIDMwNi4xMy0xNS4yNkwzMDYuMTMtMTUuMjZRMzA2LjEzLTE2LjIxIDMwNi4wNi0xNy4zIDMwNS45OC0xOC4zOCAzMDUuNzUtMTkuNDcgMzA1LjUyLTIwLjU2IDMwNS4xMy0yMS41NiAzMDQuNzQtMjIuNTYgMzA0LjA5LTIzLjMyIDMwMy40NC0yNC4wNyAzMDIuNTMtMjQuNTQgMzAxLjYxLTI1IDMwMC4zNy0yNUwzMDAuMzctMjVRMjk5LjE1LTI1IDI5OC4yLTI0LjQ1IDI5Ny4yNC0yMy45IDI5Ni41MS0yMy4wMSAyOTUuNzgtMjIuMTIgMjk1LjI1LTIwLjk3IDI5NC43My0xOS44MiAyOTQuNC0xOC42MiAyOTQuMDctMTcuNDEgMjkzLjkyLTE2LjI0IDI5My43OC0xNS4wNiAyOTMuNzgtMTQuMTRMMjkzLjc4LTE0LjE0IDI5My43OCAwIDI4NS41IDAgMjg1LjUtMjguMiAyODguNjctMjguMiAyOTIuNDYtMjEuNjNRMjkzLjE0LTIzLjI3IDI5NC4xNy0yNC42MSAyOTUuMTktMjUuOTUgMjk2LjQ5LTI2LjkgMjk3Ljc4LTI3Ljg2IDI5OS4zNS0yOC4zNyAzMDAuOTMtMjguODggMzAyLjc2LTI4Ljg4TDMwMi43Ni0yOC44OFEzMDUuNjktMjguODggMzA3Ljg2LTI3LjkzIDMxMC4wNC0yNi45OCAzMTEuNDgtMjUuMjggMzEyLjkyLTIzLjU4IDMxMy42Mi0yMS4yNSAzMTQuMzMtMTguOTIgMzE0LjMzLTE2LjE2WiIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwwLDApIiBmaWxsPSIjMjQyN2Q5IiBjbGFzcz0id29yZG1hcmstdGV4dC0wIiBkYXRhLWZpbGwtcGFsZXR0ZS1jb2xvcj0icHJpbWFyeSIgaWQ9InRleHQtMCIvPjwvc3ZnPjwvZz48L3N2Zz48L2c+PC9zdmc+PC9nPjwvc3ZnPjwvZz48Zz48c3ZnIHZpZXdCb3g9IjAgMCA5MC40MzI4ODExODY3MzMyNyA5MC40MzI4ODExODY3MzMyNyIgaGVpZ2h0PSI5MC40MzI4ODExODY3MzMyNyIgd2lkdGg9IjkwLjQzMjg4MTE4NjczMzI3Ij48Zz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjkwLjQzMjg4MTE4NjczMzI3IiB3aWR0aD0iOTAuNDMyODgxMTg2NzMzMjciIGNsYXNzPSJpY29uLWljb24tMCIgZGF0YS1maWxsLXBhbGV0dGUtY29sb3I9ImFjY2VudCIgaWQ9Imljb24tMCI+PGcgZmlsbD0iIzI0MjdkOSIgZGF0YS1maWxsLXBhbGV0dGUtY29sb3I9ImFjY2VudCI+PHBhdGggZD0iTTkzLjU0NSA0NS44NjlBODEgODEgMCAwIDAgMTAwIDQzLjExMUM5OS41MDYgMzguOTM3IDk4LjI5NiAzNC44NzQgOTYuNzcxIDMwLjk2OCA5NC40NiAzMS4xMzUgOTIuMDc5IDMxLjQzOCA4OS43NzMgMzEuODA5QTQ0IDQ0IDAgMCAwIDg1LjYzMiAyNC42NDIgOTAgOTAgMCAwIDAgODkuODQxIDE5LjAxMSA0OC41IDQ4LjUgMCAwIDAgODAuOTg3IDEwLjE1NyA5MSA5MSAwIDAgMCA3NS4zNjUgMTQuMzU4IDQzLjMgNDMuMyAwIDAgMCA2OC4xODkgMTAuMjFDNjguNTYgNy45MDggNjguODY3IDUuNTMyIDY5LjAyOSAzLjIyNyA2NS4xMjQgMS43MDQgNjEuMDU4IDAuNDk3IDU2Ljg5MSAwIDU1Ljg3MyAyLjE0MyA1NC45NTYgNC4yNDQgNTQuMTI1IDYuNDY0QTQzLjYgNDMuNiAwIDAgMCA0NS44NjggNi40NTYgODAgODAgMCAwIDAgNDMuMTA0IDBDMzguOTQgMC40OTcgMzQuODcxIDEuNzA0IDMwLjk2NCAzLjIyMyAzMS4xMzEgNS41MzUgMzEuNDM2IDcuOTE4IDMxLjgwOCAxMC4yMjdBNDQgNDQgMCAwIDAgMjQuNjQ0IDE0LjM2NyA5MCA5MCAwIDAgMCAxOS4wMTEgMTAuMTU3IDQ4LjYgNDguNiAwIDAgMCAxMC4xNTQgMTkuMDExIDkwIDkwIDAgMCAwIDE0LjM1OSAyNC42MzUgNDMuNiA0My42IDAgMCAwIDEwLjIxMSAzMS44MDdDNy45MDcgMzEuNDM3IDUuNTMxIDMxLjEzNSAzLjIyNSAzMC45NjggMS43MDQgMzQuODc0IDAuNDkxIDM4LjkzOCAwIDQzLjExMSAyLjE0NCA0NC4xMyA0LjI0NCA0NS4wNDUgNi40NjQgNDUuODcyQTQzLjYgNDMuNiAwIDAgMCA2LjQ1NSA1NC4xMzIgODAgODAgMCAwIDAgMCA1Ni44OTFDMC40OTEgNjEuMDYyIDEuNzA0IDY1LjEyNSAzLjIyNCA2OS4wMzQgNS41MzUgNjguODY4IDcuOTE3IDY4LjU2MSAxMC4yMjQgNjguMTg4QTQ0IDQ0IDAgMCAwIDE0LjM2NiA3NS4zNTYgODcgODcgMCAwIDAgMTAuMTUzIDgwLjk5IDQ4LjggNDguOCAwIDAgMCAxOS4wMSA4OS44NDYgOTAgOTAgMCAwIDAgMjQuNjMxIDg1LjY0IDQzLjMgNDMuMyAwIDAgMCAzMS44MDYgODkuNzg4QzMxLjQzNCA5Mi4wODkgMzEuMTMxIDk0LjQ2NyAzMC45NjQgOTYuNzc3IDM0Ljg3MSA5OC4yOTUgMzguOTQgOTkuNTA2IDQzLjEwNCAxMDBBODIgODIgMCAwIDAgNDUuODcxIDkzLjUzNiA0My42IDQzLjYgMCAwIDAgNTQuMTI4IDkzLjU0NSA4MyA4MyAwIDAgMCA1Ni44OTEgMTAwQzYxLjA1OCA5OS41MDcgNjUuMTI0IDk4LjI5NSA2OS4wMyA5Ni43NzcgNjguODY3IDk0LjQ2MyA2OC41NjEgOTIuMDggNjguMTg4IDg5Ljc3NUE0NCA0NCAwIDAgMCA3NS4zNTggODUuNjMyIDkwIDkwIDAgMCAwIDgwLjk4OCA4OS44NDUgNDguOCA0OC44IDAgMCAwIDg5Ljg0MiA4MC45ODkgODcgODcgMCAwIDAgODUuNjQxIDc1LjM2NiA0My40IDQzLjQgMCAwIDAgODkuNzkxIDY4LjE4OUM5Mi4wOSA2OC41NjYgOTQuNDY3IDY4Ljg2NyA5Ni43NzEgNjkuMDMzIDk4LjI5NSA2NS4xMjUgOTkuNTA1IDYxLjA2MSAxMDAgNTYuODlBODEgODEgMCAwIDAgOTMuNTM2IDU0LjEyNyA0My43IDQzLjcgMCAwIDAgOTMuNTQ1IDQ1Ljg2OU02OC40NjUgNzcuMzg3VjYzLjIzMkM2OC40NjUgNTYuMDI4IDYxLjQ4MyA1MC4xOSA1NC4yNzkgNTAuMTlMNTAuMjUzIDU1LjEwOCA1NC4yODEgNzMuNzM1IDQ5Ljc4MyA3OC4zMjggNDUuMjg2IDczLjczNSA0OS4zMTMgNTUuMTA4IDQ1LjI4NiA1MC4xODdDMzguMDgyIDUwLjE4NyAzMS4xMDEgNTYuMDI3IDMxLjEwMSA2My4yMzFWNzYuOTI2QzIyLjY2MyA3MC45NTYgMTcuMTUzIDYxLjEyMSAxNy4xNTMgNDkuOTk5IDE3LjE1MyAzMS43OTUgMzEuOTEgMTcuMDM3IDUwLjExNSAxNy4wMzcgNjguMzE5IDE3LjAzNyA4My4wNzYgMzEuNzk1IDgzLjA3NiA0OS45OTkgODMuMDc4IDYxLjQxMyA3Ny4yNzggNzEuNDcgNjguNDY1IDc3LjM4N002MC44MTQgMzcuNTg0QzYwLjgxNCA0My42NzcgNTUuODc1IDQ4LjYxNSA0OS43ODIgNDguNjE1IDQzLjY5IDQ4LjYxNSAzOC43NSA0My42NzcgMzguNzUgMzcuNTg0UzQzLjY4OSAyNi41NTMgNDkuNzgyIDI2LjU1MyA2MC44MTQgMzEuNDkxIDYwLjgxNCAzNy41ODQiIGZpbGw9IiMyNDI3ZDkiIGRhdGEtZmlsbC1wYWxldHRlLWNvbG9yPSJhY2NlbnQiLz48L2c+PC9zdmc+PC9nPjwvc3ZnPjwvZz48L3N2Zz48L2c+PGRlZnMvPjwvc3ZnPg=="
                  className="header-logo"
                  alt="web logo"
                />
              </Link>
            </li>
          </div>
          <div className="nav-menus">
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>

            <li>
              <Link to="/jobs" className="link">
                Jobs
              </Link>
            </li>
          </div>
    
          <li>
            <button
              className="btn btn-primary home-btn"
              // onClick={() => {
              //   // Delete all cookies
              //   document.cookie.split(";").forEach((c) => {
              //     document.cookie = c
              //       .replace(/^ +/, "")
              //       .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
              //   });

              //   // Redirect to login page
              //   window.location.href = '/login';
              // }}

              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
